import React from 'react';
import {Container} from './styles';

interface ThumbnailProps {
    uri: string
}

const Header = ({uri} : ThumbnailProps) => {
    return (
        <Container source={{uri: uri}}/>
    );
}

export default Header;
