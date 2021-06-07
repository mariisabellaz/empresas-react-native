import React, {useState, useEffect, useLayoutEffect} from 'react';
import {ActivityIndicator} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "styled-components";
import {showMessage} from "react-native-flash-message";

import {
    Container,
    List,
    Separator,
    SearchWrapper,
    LoadingWrapper,
    LogoutButton,
    LogoutIcon
} from './styles';
import {EnterpriseList} from "../../components/EnterpriseList";
import {CommonInput} from "../../components/Form/CommonInput";

import {authLogout, getEnterprises} from "../../store/actions";

export function Main() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const theme = useTheme();

    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState(true);
    const [filteredDataSource, setFilteredDataSource] = useState([]);

    const enterprises = useSelector(state => Object.values(state.enterprise));

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <LogoutButton onPress={singOut}>
                    <LogoutIcon name="power"/>
                </LogoutButton>
            ),
        });
    }, [navigation]);

    async function singOut() {
        try {
            dispatch(authLogout(
                () => {
                setIsLoading(false)
                navigation.goBack();
            }))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dispatch(getEnterprises(
            (response) => {
                setIsLoading(false)
                setFilteredDataSource(response)
            },
            () => {
                setIsLoading(false);
                showMessage({
                    message: "Ops! Não foi possivel carregar os dados, tente novamente..",
                    type: "danger",
                });
            }));
    }, []);

    const searchFilter = (text) => {
        if (text) {
            const newData = enterprises.filter((item) => {
                const itemData = `${item.enterprise_name.toUpperCase()} ${item.enterprise_type.enterprise_type_name.toUpperCase()}`;
                const textData = text.toUpperCase();

                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);

        } else {
            setFilteredDataSource(enterprises);
            setSearch(text);
        }
        setSearch(text);
    };

    return (
        <Container>
            <SearchWrapper>
                <CommonInput
                    value={search}
                    onChangeText={text => searchFilter(text)}
                    placeholder="Search by name or type"
                    autoCapitalize="none"
                    autoCorrect={false}
                    inlineImageLeft='search_icon'
                    returnKeyType="search"
                    onSubmitEditing={() => searchFilter(search)}
                />
            </SearchWrapper>
            {isLoading && (
                <LoadingWrapper>
                    <ActivityIndicator size="small" color={theme.colors.primary}/>
                </LoadingWrapper>
            )}
            <List
                data={filteredDataSource}
                renderItem={({item}) => (
                    <EnterpriseList
                        enterprise={item}
                        onPress={() => navigation.navigate('EnterpriseDetails', {enterprise: item})}
                    />)}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <Separator/>}
            />
        </Container>
    );
}
