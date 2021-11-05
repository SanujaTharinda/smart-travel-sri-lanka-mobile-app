import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TripPlanner from '../screens/tripPlanner';
import { Destination } from '../screens';
import { NAVIGATION } from '../constants';
import CreateTripForm from '../screens/tripPlanner/CreateTripForm';

const Stack = createNativeStackNavigator();

const TripPlannerNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                presentation: 'modal'
            }}
            
        >
           <Stack.Screen name = {NAVIGATION.tripPlanner.first} component = {TripPlanner}/>
           <Stack.Screen name = {NAVIGATION.tripPlanner.destination} component = {Destination}/>
           <Stack.Screen name = {NAVIGATION.tripPlanner.createTrip} component = {CreateTripForm}/>
        </Stack.Navigator>
    )
};


export default TripPlannerNavigator;