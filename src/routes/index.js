import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const App = createStackNavigator();

const Routes = () => {
    return (
        <App.Navigator screenOptions={{headerShown: false}}>
            <App.Screen name="AuthRoutes" component={AuthRoutes}/>
            <App.Screen name="AppRoutes" component={AppRoutes}/>
        </App.Navigator>
    );
}

export default Routes;
