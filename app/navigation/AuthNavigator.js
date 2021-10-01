import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '../constants';
import { Login } from '../screens';
import RegisterNavigator from './RegisterNavigator';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                presentation: 'modal'
            }}
            
        >
            <Stack.Screen name={NAVIGATION.login} component={Login}/>
            <Stack.Screen name={NAVIGATION.register.navigator} component={RegisterNavigator}/>
        </Stack.Navigator>
    )
};


export default AuthNavigator;