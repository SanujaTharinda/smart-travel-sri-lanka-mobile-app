import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from './../screens';
import { Event } from './../screens';
import { NAVIGATION } from "../constants";
import { PRIMARY } from "../theme/colors";
import Category from './../screens/category/index';

const Stack = createNativeStackNavigator();



const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            mode='modal'
        >
            <Stack.Screen name={NAVIGATION.home.screen} component={Home} />
            <Stack.Screen name={NAVIGATION.event} component={Event} />
            <Stack.Screen name={NAVIGATION.category} component={Category} />
        </Stack.Navigator>
    );
}

export default HomeNavigator;