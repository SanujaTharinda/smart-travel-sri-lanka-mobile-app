import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GREY } from '../../theme/colors';

const Notification = () => {
    return(
        <View style = {styles.notificationContainer}>
            <Text style = {styles.notification}>Hi! University vacation trip starts tomorrow</Text>
        </View>
    )
};


export default Notification;

const styles = StyleSheet.create({
    notification: {
        fontSize: 15
    },
    notificationContainer: {
        width: '100%',
        backgroundColor: GREY,
        alignItems: 'center',
        padding: 15,
        borderRadius: 15,
        marginVertical: 5
    }
})