import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterNavigator from "./RegisterNavigator";
import { Login } from '../screens'
import { Home } from './../screens';
import { NAVIGATION } from '../constants'

const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={NAVIGATION.home} component={Home} />
            <Stack.Screen name={NAVIGATION.register.first} component={RegisterNavigator} />
            <Stack.Screen name={NAVIGATION.login} component={Login} />
        </Stack.Navigator>
    );
}

export default AppNavigator;