import React from "react";
import { Image, Dimensions, StyleSheet, View, Text } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Login } from '../screens'
import { NAVIGATION } from '../constants'
import RegisterNavigator from "./RegisterNavigator";
import HomeNavigator from './HomeNavigator';
import { PRIMARY } from './../theme/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                options={{
                    headerTintColor: PRIMARY,
                    headerTitle: "Smart Travel Sri Lanka",
                    headerTitleContainerStyle: {
                        marginLeft: 0
                    },

                }}
                name={NAVIGATION.home.navigator}
                component={HomeNavigator} />
            <Drawer.Screen options={{ headerShown: false }} name={NAVIGATION.login} component={Login} />
            <Drawer.Screen options={{ headerShown: false }} name={NAVIGATION.register.navigator} component={RegisterNavigator} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;

