import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from '../screens'
import { Home } from './../screens';
import { NAVIGATION } from '../constants'
import RegisterFirst from './../screens/register/firstScreen';
import RegisterSecond from './../screens/register/secondScreen';

const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name={NAVIGATION.login} component={Login} />
        </Stack.Navigator>
    );
}

export default AppNavigator;