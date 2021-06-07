import React from 'react';
import {Container} from './styles';

export function Thumbnail({uri}) {
    return (
        <Container source={{uri: uri}}/>
    );
}
