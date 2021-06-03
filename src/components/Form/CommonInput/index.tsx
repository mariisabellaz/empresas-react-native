import React from "react";
import {TextInputProps} from "react-native";
import {useTheme} from "styled-components";

import {Input} from "./styles";

type Props = TextInputProps;

function TextInput({...rest} : Props) {
    const theme = useTheme();
    return (
        <Input {...rest} placeholderTextColor={theme.colors.text.light}/>
    );
}
export default TextInput;
