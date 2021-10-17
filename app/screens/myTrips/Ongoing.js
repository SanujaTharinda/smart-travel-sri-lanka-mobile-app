import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Trip from './Trip';

export default function Ongoing() {
    return (
        <View style = {styles.container}>
            <Trip trip = {{
                title: "University Vacation Team",
                startDate: "September 26, 2021",
                endDate: "September 29, 2021",
                destinations: ["Sigiriya, Pidurangala"]
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
