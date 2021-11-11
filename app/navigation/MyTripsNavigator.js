import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTrips from "../screens/myTrips";
import { NAVIGATION } from "../constants";
import Destination from "../screens/destination";
import Journal from "../screens/myTrips/Journal";
import { WHITE } from "../theme/colors";

const Stack = createNativeStackNavigator();

const MyTripsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                presentation: 'modal',
                contentStyle: {
                    backgroundColor: WHITE
                }
            }}
            
        >
            <Stack.Screen name={NAVIGATION.myTrips.first} component={MyTrips} />
            <Stack.Screen name={NAVIGATION.myTrips.destination} component={Destination} />
            <Stack.Screen name={NAVIGATION.myTrips.journal} component={Journal} />
        </Stack.Navigator>
    );
}

export default MyTripsNavigator;