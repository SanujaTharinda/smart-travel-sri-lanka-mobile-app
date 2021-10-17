import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";
import { getAuth } from "../store/auth";


const RootNavigator = () => {
    const auth = useSelector(getAuth);
    return (
        <NavigationContainer>
           {!auth.isEmpty ?  <AppNavigator /> : <AuthNavigator/>}
        </NavigationContainer>
    );
}

export default RootNavigator;