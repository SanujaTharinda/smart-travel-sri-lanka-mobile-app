import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTrips from "../screens/myTrips";
import { NAVIGATION } from "../constants";

const Stack = createNativeStackNavigator();

const MyTripsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                presentation: 'modal'
            }}
            
        >
            <Stack.Screen name={NAVIGATION.myTrips.first} component={MyTrips} />
        </Stack.Navigator>
    );
}

export default MyTripsNavigator;