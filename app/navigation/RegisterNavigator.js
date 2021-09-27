import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAVIGATION } from '../constants'
import { RegisterFirst, RegisterSecond } from "./../screens";

const Stack = createNativeStackNavigator();


const RegisterNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions = {{
                headerShown: false
            }}
        >
            <Stack.Screen name={NAVIGATION.register.first} component={RegisterFirst} />
            <Stack.Screen name={NAVIGATION.register.second} component={RegisterSecond} />
        </Stack.Navigator>
    );
}

export default RegisterNavigator;