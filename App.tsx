import 'react-native-gesture-handler';

import React from 'react';
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

import Routes from './src/routes/app.routes';
import {DefaultTheme} from './src/theme';

export default function App() {
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium,
        Montserrat_600SemiBold
    });

    if(!fontsLoaded) {
        return <AppLoading />
    }

    return (
       <ThemeProvider theme={DefaultTheme}>
           <NavigationContainer>
               <StatusBar barStyle="light-content" translucent/>
               <Routes/>
           </NavigationContainer>
       </ThemeProvider>
    );
}
