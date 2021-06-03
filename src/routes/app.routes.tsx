import * as React from 'react';
import {useTheme} from "styled-components";
import {createStackNavigator} from '@react-navigation/stack';

import {Main} from "../pages";

const App = createStackNavigator();

const AppRoutes = () => {
    const theme = useTheme();

    return (
        <App.Navigator screenOptions={{
            headerTitleStyle: {
                color: theme.colors.text.inverted,
                fontFamily: theme.fontFamily.medium,
                fontSize: theme.fontsize.regular,
                textTransform: 'uppercase'
            },
            headerStyle: {
                backgroundColor: theme.colors.header
            },
            headerBackTitleVisible: false,
            headerTintColor: theme.colors.background
        }}>
            <App.Screen name="Main" component={Main}/>
        </App.Navigator>
    );
}

export default AppRoutes;
