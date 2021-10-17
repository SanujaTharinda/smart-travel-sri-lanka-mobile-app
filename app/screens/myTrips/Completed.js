import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Trip from './Trip';

export default function Completed() {
    return (
        <View style = {styles.container}>
            <Trip trip = {{
                title: "AL Class Trip",
                startDate: "September 26, 2016",
                endDate: "September 29, 2016",
                destinations: ["Nuwara Eliya"]
            }}/>
            <Trip trip = {{
                title: "Family Christmas Vacation Trip",
                startDate: "December 26, 2016",
                endDate: " December 30, 2016",
                destinations: ["Galle Fort, Pigeon Island"]
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})
