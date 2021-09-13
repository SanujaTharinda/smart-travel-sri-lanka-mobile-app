import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAVIGATION } from '../constants'
import RegisterFirst from './../screens/register/firstScreen';
import RegisterSecond from './../screens/register/secondScreen';

const Stack = createNativeStackNavigator();


const RegisterNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name={NAVIGATION.register.first} component={RegisterFirst} />
            <Stack.Screen options={{ headerShown: false }} name={NAVIGATION.register.second} component={RegisterSecond} />
        </Stack.Navigator>
    );
}

export default RegisterNavigator;