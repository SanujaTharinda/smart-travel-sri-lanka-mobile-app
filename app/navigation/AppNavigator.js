import React from "react";
import { NAVIGATION } from '../constants'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerNavigator from './DrawerNavigator';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    return (
        <DrawerNavigator />
    );
}

export default AppNavigator;


