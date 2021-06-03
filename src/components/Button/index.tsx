import React from 'react';
import {RectButtonProps} from "react-native-gesture-handler";

import {Container, Label, ButtonWrapper} from './styles';


interface ButtonProps extends RectButtonProps{
    label: string,
    onPress: () => void
}

const Header = ({label, onPress} : ButtonProps) => {
    return (
        <Container onPress={onPress}>
            <ButtonWrapper>
                <Label>{label}</Label>
            </ButtonWrapper>
        </Container>
    );
}

export default Header;
