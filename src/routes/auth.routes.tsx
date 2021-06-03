import * as React from 'react';
import {useTheme} from "styled-components";
import {createStackNavigator} from '@react-navigation/stack';

import {Login} from "../pages";

const App = createStackNavigator();

const AppRoutes = () => {
    const theme = useTheme();

    return (
        <App.Navigator screenOptions={{headerShown: false}}>
            <App.Screen name="ConnectionAvailable" component={Login}/>
        </App.Navigator>
    );
}

export default AppRoutes;
