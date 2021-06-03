import React, {useState, useCallback} from 'react';
import {StatusBar} from "react-native";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from 'yup';

import {Container, Fields, Form, Title, Subtitle, Greetings, Logo} from './styles';
import {Button, Input} from "../../components";

import {useLanguage} from "../../language";
import {useAssets} from "../../assets";

interface FormDataProps {
    email: string,
    password: string
}
const schema = Yup.object().shape({
    email: Yup
        .string()
        .email('Enter a valid email address')
        .required('Email is require'),
    password: Yup
        .string()
        .required('Password is require ')
});

const Login = () => {
    const {LoginStrings: strings} = useLanguage();
    const {logo} = useAssets().images;

    const {control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });

    const handleAuthSubmit = useCallback((form: FormDataProps) => {
        console.log(form);
    }, []);

    return (
        <Container>
            <StatusBar barStyle="dark-content" translucent/>
            <Logo source={logo}/>
            <Form>
                <Greetings>
                    <Title>{`${strings.greetings}`}</Title>
                    <Subtitle>{`${strings.description}`}</Subtitle>
                </Greetings>

                <Fields>
                    <Input
                        name="email"
                        control={control}
                        placeholder="Email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        error={errors.name && errors.name.message}
                    />
                    <Input
                        name="password"
                        control={control}
                        placeholder="Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        error={errors.name && errors.name.message}
                    />
                </Fields>

                <Button label={`${strings.login}`} onPress={handleSubmit(handleAuthSubmit)}/>
            </Form>
        </Container>
    );
};

export default Login;
