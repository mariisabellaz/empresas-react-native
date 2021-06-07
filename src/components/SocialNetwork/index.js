import React from 'react';

import {Container, SocialIcon, SocialName} from './styles';
import {useAssets} from "../../assets";
import {useLanguage} from "../../language";

export function SocialNetwork({type, link, ...rest}) {
    const {facebook, linkedin, twitter} = useAssets().images;
    const {EnterpriseDetailsStrings: strings} = useLanguage();


    const renderImage = () => {
        switch (type) {
            case 'facebook':
                return (<SocialIcon source={facebook}/> );

            case 'linkedin':
                return (<SocialIcon source={linkedin}/> );
                case 'twitter':
                return (<SocialIcon source={twitter}/> );

            default:
                return null;
        }
    };

    return (
        <Container {...rest}>
            {renderImage()}
            <SocialName>{link === null || '' ? strings.uninformed : link}</SocialName>
        </Container>
    );
}
