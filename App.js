import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import {NavigationContainer} from "@react-navigation/native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import FlashMessage from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Reactotron from 'reactotron-react-native';

import {theme} from './src/theme';
import {checkConnected} from './src/utils/check-connected';

import Routes from "./src/routes";
import store from './src/store/store';

if (__DEV__) {
    const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
        .configure()
        .useReactNative()
        .connect();

    console.tron = tron;

    tron.clear();
}

export default function App() {
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium,
        Montserrat_600SemiBold
    });

    const [connectStatus, setConnectStatus] = useState(false)

    checkConnected().then(res => {
        setConnectStatus(res)
    })

    if (!fontsLoaded) {
        return <AppLoading/>
    }

    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <NavigationContainer>
                    <StatusBar barStyle="dark-content"/>
                    <Routes/>
                    <FlashMessage position="top"/>
                </NavigationContainer>
            </Provider>
        </ThemeProvider>
    );
}
