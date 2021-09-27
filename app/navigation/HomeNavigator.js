import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from './../screens';
import { Event } from './../screens';
import { NAVIGATION } from "../constants";
import CategoryNavigator from "./CategoryNavigator";

const Stack = createNativeStackNavigator();



const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                presentation: 'modal'
            }}
        >
            <Stack.Screen name={NAVIGATION.home.screen} component={Home} />
            <Stack.Screen name={NAVIGATION.category.navigator} component={CategoryNavigator} />
            <Stack.Screen name={NAVIGATION.event} component={Event} />
        </Stack.Navigator>
    );
}

export default HomeNavigator;