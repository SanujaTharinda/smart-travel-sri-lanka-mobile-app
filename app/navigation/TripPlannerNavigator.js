import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '../constants';
import TripPlanner from '../screens/tripPlanner';

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
        </Stack.Navigator>
    )
};


export default TripPlannerNavigator;