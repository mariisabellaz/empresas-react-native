import React from "react";
import {TextInputProps} from "react-native";
import {Control, Controller} from "react-hook-form";

import {Container, Error} from "./styles";
import {CommonInput} from "../../index";

interface Props extends TextInputProps {
    control: Control
    name: string;
    error: string
}

function InputForm({control, name, error, ...rest}: Props) {
    return (
        <Container>
            <Controller
                control={control}
                name={name}
                render={({ field: {onChange, onBlur, value}}) => (
                    <CommonInput
                        onChangeText={onChange}
                        value={value}
                        onBlur={onBlur}
                        {...rest}
                    />
                )}
            />
            {error && (<Error>{error}</Error>)}
        </Container>
    );
}

export default InputForm;
