import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAVIGATION } from "../constants";
import { Category } from './../screens';
import { Destination } from '../screens';

const Stack = createNativeStackNavigator();



const CategoryNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                presentation: 'modal'
            }}
            
        >
            <Stack.Screen name={NAVIGATION.category.screen} component={Category} />
            <Stack.Screen name={NAVIGATION.destination} component={Destination} />
           
        </Stack.Navigator>
    );
}

export default CategoryNavigator;