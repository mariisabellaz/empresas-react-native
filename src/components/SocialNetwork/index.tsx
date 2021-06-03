import React from 'react';

import {Container, SocialIcon, SocialName} from './styles';
import {useAssets} from "../../assets";

interface SocialNetworkProps {
    type: 'facebook' | 'twitter' | 'linkedin',
    link: string,
}


const SocialNetwork = ({type, link, ...rest} : SocialNetworkProps) => {
    const {facebook, linkedin, twitter} = useAssets().images;

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
            <SocialName>{link}</SocialName>
        </Container>
    );
};

export default SocialNetwork;
