import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login} from "../pages/login";

const Auth = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Auth.Navigator screenOptions={{headerShown: false}}>
            <Auth.Screen name="Login" component={Login}/>
        </Auth.Navigator>
    );
}

export default AuthRoutes;
