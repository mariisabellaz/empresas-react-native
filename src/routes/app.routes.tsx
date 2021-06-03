import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {Main} from "../pages/incex";

const App = createStackNavigator();

const AppRoutes = () => {
    return (
            <App.Navigator>
                <App.Screen name="Main" component={Main} />
            </App.Navigator>
    );
}

export default AppRoutes;
