import React from 'react';
import {ActivityIndicator} from "react-native";

import {Container, Label, ButtonWrapper} from './styles';
import {useTheme} from "styled-components";


export function Button({label, onPress, isLoading}) {
    const theme = useTheme();

    return (
        <Container onPress={onPress}>
            <ButtonWrapper>
                {isLoading ? <ActivityIndicator size="small" color={theme.colors.background}/> : <Label>{label}</Label>}
            </ButtonWrapper>
        </Container>
    );
}
