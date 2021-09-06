import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register1Screen } from "../screens";
import { Register2Screen } from "../screens";
import { NAVIGATION } from "../constants";

const Stack = createNativeStackNavigator();

const RegisterNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={NAVIGATION.register.first}>
            <Stack.Screen name={NAVIGATION.register.first} component={Register1Screen} />
            <Stack.Screen name={NAVIGATION.register.second} component={Register2Screen} />
        </Stack.Navigator>
    );
}

export default RegisterNavigator;