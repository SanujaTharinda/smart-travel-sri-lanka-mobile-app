import React from 'react'
import { ScrollView ,View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { getReadNotifications, getTodayNotifications } from '../../store/entities/users';
import { GREY } from '../../theme/colors';
import Notification from './Notification';
import AnimatedEmpty from "../../components/common/AnimatedEmpty";

export default function Read() {
    
    const read = useSelector(getReadNotifications);
    const today = useSelector(getTodayNotifications);
    console.log("Today: ", today);
    

    return (
        <>
        {read && read.length > 0 ? <ScrollView style = {styles.container}>
           {read.map((r,i) => <Notification key = {"read-notify" + i.toString()} content = {r.content} isRead = {true}/>)}
        </ScrollView> : <AnimatedEmpty message = {"No Unread Notifications..."}/>}
        </>
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
