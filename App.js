import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootNavigator from "./app/navigation";



const App = () => {
  return (
    <RootNavigator />
  );
};

export default () => {
  return <App />; // as we r using react need to use React
};
