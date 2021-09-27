import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { About, 
        Login,
        TripPlanner,
        CurrencyConverter,
        Help,
        Settings
    } from '../screens';
import { NAVIGATION } from '../constants'
import RegisterNavigator from "./RegisterNavigator";
import HomeNavigator from './HomeNavigator';
import { PRIMARY } from './../theme/colors';
import CustomDrawar from "../components/CustomDrawar";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent = {() => <CustomDrawar/>}
            screenOptions = {{
                headerTintColor: PRIMARY,
                headerTitle: "Smart Travel Sri Lanka",
                headerTitleContainerStyle: {
                    marginLeft: 0
                },

            }}
        >
            <Drawer.Screen
                name={NAVIGATION.home.navigator}
                component={HomeNavigator} />
            <Drawer.Screen options={{ headerShown: false }} name={NAVIGATION.login} component={Login} />
            <Drawer.Screen options={{ headerShown: false }} name={NAVIGATION.register.navigator} component={RegisterNavigator} />
            <Drawer.Screen name={NAVIGATION.about} component={About} />
            <Drawer.Screen name={NAVIGATION.help} component={Help} />
            <Drawer.Screen name={NAVIGATION.settings} component={Settings} />
            <Drawer.Screen name={NAVIGATION.tripPlanner} component={TripPlanner} />
            <Drawer.Screen name={NAVIGATION.currencyConverter} component={CurrencyConverter} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;

