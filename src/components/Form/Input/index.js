import React from "react";
import {Controller} from "react-hook-form";

import {Container, Error} from "./styles";
import {CommonInput} from "../CommonInput";

export function Input({control, name, error, ...rest}) {
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
