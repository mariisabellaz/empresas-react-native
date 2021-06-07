import React from "react";
import {useTheme} from "styled-components";

import {Container} from "./styles";

export function CommonInput({...rest}) {
    const theme = useTheme();
    return (
        <Container {...rest} placeholderTextColor={theme.colors.text.light}/>
    );
}
