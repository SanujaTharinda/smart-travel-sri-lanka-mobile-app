import React from 'react'
import { ScrollView ,View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../../store/auth';
import { getChecklistUpdatingStatus, getUnReadNotifications, markRead } from '../../store/entities/users';
import { GREY } from '../../theme/colors';
import Notification from './Notification';

export default function Unread() {
    const dispatch = useDispatch();
    const unread = useSelector(getUnReadNotifications);
    const auth = useSelector(getAuth);
    const updating = useSelector(getChecklistUpdatingStatus);

    const handleMark = (u) => {
        dispatch(markRead(auth, u.id));
    };

    return (
        <ScrollView style = {styles.container}>
          {unread.map((u,i) => <Notification onRead= {() => handleMark(u)} key = {"unread-notify" + i.toString()} content = {u.content} isRead = {false} updating = {updating}/>)}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        flexGrow: 1
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
