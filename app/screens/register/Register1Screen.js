import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Register1Screen = ({ navigation }) => {
  return (
    <View>
      <Text>Register1</Text>
      <Button
        title="Go to Register2"
        onPress={() => navigation.navigate("Register2")}
      />
    </View>
  );
};

export default Register1Screen;

const styles = StyleSheet.create({});
