import React from 'react';
import {RectButtonProps} from "react-native-gesture-handler";

import {Container, Label, ButtonWrapper} from './styles';


interface ButtonProps extends RectButtonProps{
    label: string
}

const Header = ({label, ...rest} : ButtonProps) => {
    return (
        <Container {...rest}>
            <ButtonWrapper>
                <Label>{label}</Label>
            </ButtonWrapper>
        </Container>
    );
}

export default Header;
