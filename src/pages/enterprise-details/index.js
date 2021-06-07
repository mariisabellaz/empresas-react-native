import React from 'react';
import {useRoute} from "@react-navigation/native";
import {Alert, Linking} from "react-native";

import {
    Container,
    Enterprise,
    EnterpriseInfo,
    EnterpriseName,
    EnterpriseType,
    Shape,
    WhatsappIcon,
    Wrapper,
    EnterpriseSharePrice,
    SharePrice, Details, Addresses, Subtitle
} from './styles';
import {SocialNetwork} from "../../components/SocialNetwork";

import {useLanguage} from "../../language";
import {FORMAT_PRICE} from "../../utils/format-price";

export function EnterpriseDetails() {
    const route = useRoute();

    const {EnterpriseDetailsStrings: strings} = useLanguage();

    const {enterprise} = route.params;
    const {
        city,
        country,
        description,
        email_enterprise,
        enterprise_name,
        enterprise_type,
        facebook,
        twitter,
        linkedin,
        phone,
        sharePrice,
    } = enterprise
    const {enterprise_type_name} = enterprise_type

    function handleOpenWhatsapp() {
        const formatted = /^\d{10}$/;
        const whatsappMsg = 'Hello';

        if(phone !== null && phone.value.match(formatted)) {
            Linking.openURL(`whatsapp://send?phone=${phone}&text=${whatsappMsg}`);
        }else {
            Alert.alert(
                "Atenção",
                "Unable to access number to forward message",
                [
                    { text: "OK", onPress: () => {} }
                ]
            );
        }
    }

    return (
        <Container>
            <Enterprise>
                <EnterpriseInfo>
                    <EnterpriseName>{enterprise_name}</EnterpriseName>
                    <EnterpriseType>{enterprise_type_name}</EnterpriseType>
                </EnterpriseInfo>
                <Shape onPress={() => handleOpenWhatsapp()}>
                        <WhatsappIcon name="whatsapp"/>
                </Shape>
            </Enterprise>
            <Wrapper>
                <EnterpriseSharePrice>
                    {sharePrice !== undefined ? `${FORMAT_PRICE(sharePrice)}` : '$ 0,00'}
                    <SharePrice>{`${strings.sharePrice}`}</SharePrice>
                </EnterpriseSharePrice>

                <Details>{description}</Details>

                <Addresses>{email_enterprise !== null ? email_enterprise : 'Phone ' + strings.uninformed}</Addresses>
                <Addresses>{`${city} - ${country}`}</Addresses>

                <Subtitle>{`${strings.socialNetwork}`}</Subtitle>
                <SocialNetwork type="facebook" link={facebook}/>
                <SocialNetwork type="twitter" link={twitter}/>
                <SocialNetwork type="linkedin" link={linkedin}/>
            </Wrapper>
        </Container>
    );
}
