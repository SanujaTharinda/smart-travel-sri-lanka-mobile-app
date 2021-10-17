import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BLACK, GREY, PRIMARY } from '../../theme/colors';

const Trip = ({ trip }) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>{trip.title}</Text>
            <Text style = {styles.property}>Start Date: </Text><Text>{trip.startDate}</Text>
            <Text style = {styles.property}>End Date: </Text><Text>{trip.endDate}</Text>
            <Text style = {styles.property}>Destinations: </Text>
            {trip.destinations.map(d =><Text key = {d}>{d}</Text>)}

        </View>
    )
};


export default Trip;

const styles = StyleSheet.create({
    container: {
        width: '95%',
        backgroundColor: GREY,
        alignItems: 'center',
        padding: 15,
        borderRadius: 15,
        marginVertical: 5
    },
    title: {
        fontSize: 18,
        color: PRIMARY,
        fontWeight: 'bold'
    },
    property: {
        marginVertical: 10,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    }
})