import React, {useCallback, useState} from 'react';
import {StatusBar} from "react-native";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {showMessage} from "react-native-flash-message";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from 'yup';

import {Container, Fields, Form, Title, Subtitle, Greetings, Logo} from './styles';
import {Button} from "../../components/Button";
import {Input} from "../../components/Form/Input";

import {useLanguage} from "../../language";
import {useAssets} from "../../assets";
import {authLogin} from "../../store/actions";

const schema = Yup.object().shape({
    email: Yup
        .string()
        .email('Enter a valid email address')
        .required('Email is require'),
    password: Yup
        .string()
        .required('Password is require ')
});

export function Login() {
    const {LoginStrings: strings} = useLanguage();
    const {logo} = useAssets().images;
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(false);
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const handleAuthSubmit = useCallback(async (form) => {
        try {
            setIsLoading(true);

            dispatch(authLogin(
                form,
                () => {
                    setIsLoading(false);
                    navigation.navigate('AppRoutes');
                },
                () => {
                    setIsLoading(false);
                    showMessage({
                        message: "Ops! Não foi possivel realizar o login, verifique suas credenciais e tente novamente..",
                        type: "danger",
                    });
                }
            ));
        } catch (err) {
            showMessage({
                message: "Ops! Aconteceu algo inesperado, tente novamente.",
                type: "danger",
            });
        }
    }, []);

    return (
        <Container>
            <StatusBar barStyle="dark-content" translucent/>
            <Logo source={logo}/>
            <Form>
                <Greetings>
                    <Title>{`${strings.greetings}`}</Title>
                    <Subtitle>{`${strings.description}`}</Subtitle>
                </Greetings>

                <Fields>
                    <Input
                        name="email"
                        control={control}
                        placeholder="Email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        error={errors.name && errors.name.message}
                    />
                    <Input
                        name="password"
                        control={control}
                        placeholder="Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        error={errors.name && errors.name.message}
                    />
                </Fields>

                <Button
                    label={`${strings.login}`}
                    onPress={handleSubmit(handleAuthSubmit)}
                    isLoading={isLoading}
                />
            </Form>
        </Container>
    );
}
