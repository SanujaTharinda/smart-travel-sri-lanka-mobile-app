import React from 'react'
import { ScrollView ,View, Text, StyleSheet } from 'react-native';
import { GREY } from '../../theme/colors';
import Notification from './Notification';

export default function Read() {
    return (
        <ScrollView style = {styles.container}>
           <Notification/>
           <Notification/>
           <Notification/>
           <Notification/>
           <Notification/>
           <Notification/>
           <Notification/>
           <Notification/>
           <Notification/>
           <Notification/>
           <Notification/>
           <Notification/>
           <Notification/>
           <Notification/>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        flexGrow: 1,
    },
    notification: {
        fontSize: 15
    },
    notificationContainer: {
        width: '100%',
        backgroundColor: GREY,
        alignItems: 'center',
        padding: 15,
        borderRadius: 15
    }
})
