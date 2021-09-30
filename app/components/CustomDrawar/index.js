import React from 'react';
import { View,Image, StyleSheet,} from 'react-native';
import { DARKGREY } from '../../theme/colors';
import Section from './Section';
import {NAVIGATION } from '../../constants';

const profileElements = [
    {name: "Login", icon: "log-in-outline", destination: NAVIGATION.login},
    {name: "Register", icon: "person-add-outline", destination: NAVIGATION.register.navigator},
];

const navigateElements = [
    {name: "Home", icon: "home-outline", destination: NAVIGATION.home.navigator, screen: NAVIGATION.home.screen},
    {name: "Trip Planner", icon: "globe-2-outline", destination: NAVIGATION.tripPlanner},
    {name: "Currency Converter", icon: "pricetags", destination: NAVIGATION.currencyConverter},
];

const supportElements = [
    {name: "About", icon: "info-outline", destination: NAVIGATION.about},
    {name: "Help", icon: "question-mark-circle-outline", destination: NAVIGATION.help},
    {name: "Settings", icon: "settings-2-outline", destination: NAVIGATION.settings},
];


const CustomDrawar = () => {

    return(<View style = {styles.container}>
                <Image 
                    style = {styles.image}
                    source = {require('../../../assets/drawar/header.jpg')}
                />
                <View style = {styles.sections}>
                    <Section
                        title = {"Profile"}
                        elements = {profileElements}
                    />
                    <View style = {styles.ruler}></View>
                    <Section
                        title = {"Navigate"}
                        elements = {navigateElements}
                    />
                    <View style = {styles.ruler}></View>
                    <Section
                        title = {"Support"}
                        elements = {supportElements}
                    />
                </View>
           </View>)   
}

export default CustomDrawar;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "25%",
    },
    image: {
        width: "100%", 
        height: "100%"
    },
    sections: {
        paddingLeft: 20,
        paddingRight: 15,
        marginTop: 10
    },
    ruler: {
        width: "100%",
        height: 1,
        backgroundColor: DARKGREY,
        marginTop: 15

    }
})