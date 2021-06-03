import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {StatusBar} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes/auth.routes';
import {ConnectionAvailable} from "./src/pages";

import {DefaultTheme} from './src/theme';
import {checkConnected} from './src/utils/check-connected';

export default function App() {
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium,
        Montserrat_600SemiBold
    });
    const [connectStatus, setConnectStatus] = useState(false)

    checkConnected().then(res => {
        // @ts-ignore
        setConnectStatus(res)
    })


    if (!fontsLoaded) {
        return <AppLoading/>
    }

    /*if (connectStatus) {
        return <ConnectionAvailable/>
    }*/

    return (
        <ThemeProvider theme={DefaultTheme}>

            <NavigationContainer>
                <StatusBar barStyle="light-content" translucent/>
                <Routes/>
            </NavigationContainer>
        </ThemeProvider>
    );
}
