import React from 'react';
import {Container} from './styles';

interface ThumbnailProps {
    uri: string
}

const Thumbnail = ({uri} : ThumbnailProps) => {
    return (
        <Container source={{uri: uri}}/>
    );
}

export default Thumbnail;
