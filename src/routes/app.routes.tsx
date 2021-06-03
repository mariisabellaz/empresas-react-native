import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Main} from "../pages";

const App = createStackNavigator();

const AppRoutes = () => {
    return (
        <App.Navigator screenOptions={{headerShown: false}}>
            <App.Screen name="Main" component={Main}/>
        </App.Navigator>
    );
}

export default AppRoutes;
