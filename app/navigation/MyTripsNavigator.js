import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTrips from "../screens/myTrips";
import { NAVIGATION } from "../constants";
import Destination from "../screens/destination";

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
            <Stack.Screen name={NAVIGATION.myTrips.destination} component={Destination} />
        </Stack.Navigator>
    );
}

export default MyTripsNavigator;