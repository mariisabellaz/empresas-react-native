import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';

import Routes from './src/routes/app.routes';
import {DefaultTheme} from './src/theme';

export default function App() {
    return (
       <ThemeProvider theme={DefaultTheme}>
           <NavigationContainer>
               <Routes/>
           </NavigationContainer>
       </ThemeProvider>
    );
}
