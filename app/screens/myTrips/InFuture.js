import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Trip from './Trip';

export default function InFuture() {
    return (
        <View style = {styles.container}>
            <Trip trip = {{
                title: "Post Lockdown Trip",
                startDate: "October 26, 2021",
                endDate: "October 29, 2021",
                destinations: ["Nuwara Eliya"]
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
