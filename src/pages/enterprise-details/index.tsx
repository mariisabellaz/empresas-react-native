import React, {useState} from 'react';

import {
    Container,
    Enterprise,
    EnterpriseInfo,
    EnterpriseName,
    EnterpriseType,
    Shape,
    PhoneButton,
    WhatsappIcon,
    Wrapper,
    EnterpriseSharePrice,
    SharePrice, Details, Addresses, Subtitle
} from './styles';
import {SocialNetwork} from "../../components";

import {useLanguage} from "../../language";
import {FORMAT_PRICE} from "../../utils/format-price";

const EnterpriseDetails = () => {
    const {EnterpriseDetailsStrings: strings} = useLanguage();

    return (
        <Container>
            <Enterprise>
                <EnterpriseInfo>
                    <EnterpriseName>Nome da empresa</EnterpriseName>
                    <EnterpriseType>Tipo da empresa</EnterpriseType>
                </EnterpriseInfo>
                <Shape>
                    <PhoneButton>
                        <WhatsappIcon name="whatsapp"/>
                    </PhoneButton>
                </Shape>
            </Enterprise>
            <Wrapper>
                <EnterpriseSharePrice>
                    {`${FORMAT_PRICE(129)}`}
                    <SharePrice>{`${strings.sharePrice}`}</SharePrice>
                </EnterpriseSharePrice>

                <Details>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Details>
                <Addresses>4379  Better Street - Pleasanton</Addresses>
                <Addresses>email@email.com</Addresses>

                <Subtitle>{`${strings.socialNetwork}`}</Subtitle>
                <SocialNetwork type="facebook" link="facebook.com"/>
                <SocialNetwork type="linkedin" link="facebook.com"/>
                <SocialNetwork type="twitter" link="facebook.com"/>
            </Wrapper>

        </Container>
    );
};

export default EnterpriseDetails;
