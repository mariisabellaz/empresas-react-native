import React from "react";
import {DevSettings} from "react-native";

import {Container, PhoneConnection, Title, Description, ButtonWrapper} from "./styles";

import {Button} from "../../components/Button";

import {useAssets} from "../../assets";
import {useLanguage} from "../../language";

export function ConnectionAvailable() {
    const {phoneConnection} = useAssets().images
    const {ConnectionAvailableStrings: strings} = useLanguage();

    return(
        <Container>
            <PhoneConnection source={phoneConnection}/>
            <Title>{`${strings.title}`}</Title>
            <Description>{`${strings.description}`}</Description>

            <ButtonWrapper>
                <Button label={`${strings.tryAgain}`} onPress={() => DevSettings.reload()}/>
            </ButtonWrapper>
        </Container>
    );
}
