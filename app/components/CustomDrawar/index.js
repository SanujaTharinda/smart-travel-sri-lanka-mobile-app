import React from 'react';
import { View,Image, StyleSheet, Text,} from 'react-native';
import { DARKGREY, PRIMARY } from '../../theme/colors';
import Section from './Section';
import {NAVIGATION } from '../../constants';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/auth';

const profileElements = [
   { name: "My Trips", icon: "shopping-bag-outline", destination:NAVIGATION.myTrips.navigator},
   { name: "Notifications", icon: "bell-outline", destination:NAVIGATION.notifications},
   { name: "Profile", icon: "person-outline", destination:NAVIGATION.profile}
];

const navigateElements = [
    {name: "Home", icon: "home-outline", destination: NAVIGATION.home.navigator, screen: NAVIGATION.home.screen},
    {name: "Trip Planner", icon: "globe-2-outline", destination: NAVIGATION.tripPlanner.navigator, screen: NAVIGATION.tripPlanner.first},
    // {name: "Currency Converter", icon: "pricetags", destination: NAVIGATION.currencyConverter},
];

const supportElements = [
    {name: "About", icon: "info-outline", destination: NAVIGATION.about},
    {name: "Help", icon: "question-mark-circle-outline", destination: NAVIGATION.help},
    // {name: "Settings", icon: "settings-2-outline", destination: NAVIGATION.settings},
];


const CustomDrawar = ({photo}) => {
    const dispatch = useDispatch();

    return(<View style = {styles.container}>
                <View style = {styles.imageContainer}>
                    <Image
                        style = {styles.image}
                        source = {photo ? {uri: photo} : require('../../../assets/profile/blankProfile.png')}
                    />
                </View>
                <View style = {styles.sections}>
                    <Section
                        title = {"Profile"}
                        elements = {[...profileElements, {name: "Sign Out", icon: "log-out-outline", onPress: () => dispatch(signOut()) }]}
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
        height: "25%"
    },
    image: {
        width: 100, 
        height: 100,
        borderRadius: 50   
    },
    imageContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: PRIMARY,
        paddingTop: 40,
        paddingBottom: 40,
        opacity: 1
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
    },
    username: {
        color: PRIMARY,
        fontSize: 18
    }
})