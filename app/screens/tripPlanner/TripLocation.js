import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NAVIGATION } from './../../constants';
import { DARKGREY, GREY, PRIMARY } from '../../theme/colors';

const TripLocation = ({ location }) => {
    const navigator = useNavigation();
    return(
        <View style = {styles.container}>
                <Text style = {styles.title}>{location.title}</Text>
                <Text style = {styles.propertyContainer}>
                    <Text style = {styles.property}>Travel Duration: </Text>
                    <Text>{location.distanceMatrix.duration_in_traffic.text}</Text>
                </Text>
                <Text style = {styles.propertyContainer}>
                    <Text style = {styles.property}>Address: </Text>
                    <Text>{location.address}</Text>
                </Text>
                <Text style = {styles.propertyContainer}>
                    <Text style = {styles.property}>Overview: </Text>
                    <Text>{location.overview}</Text>
                </Text>
                <TouchableOpacity onPress = {() => navigator.navigate(NAVIGATION.tripPlanner.navigator, {screen: NAVIGATION.tripPlanner.destination, params: { destination: location} })}>
                    <Text style = {styles.seeMore}>See More...</Text>
                    <Image style = {styles.image} source = {{uri: location.mainPhoto}} />
                </TouchableOpacity>
        </View>
    );
} 

export default TripLocation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10
    },
    image: {
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").height * 0.4,
        marginVertical: 15,
        borderRadius: 20
    },
    property: {
        color: DARKGREY,    
    },
    propertyContainer: {
        marginVertical: 2
    },
    seeMore: {
        color: PRIMARY,
    },
    title: {
        color: PRIMARY,
        fontSize: 23,
        fontWeight: "bold",
        marginBottom: 12
    }
})