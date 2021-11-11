import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Button, Text } from '@ui-kitten/components';
import { BLACK, GREY, WHITE } from '../../theme/colors';
import Spinner from '../../components/common/Spinner';

const Notification = ({ content, isRead, onRead, updating = false }) => {
    return(
        <View style = {styles.notificationContainer}>
            <Text style = {styles.notification}>{content}</Text>
            {!isRead && <Button
                onPress = {onRead ? onRead : () => console.log("Pressed")}
                size='small'
                title='submit'
                style={styles.button}>
                {(evaProps) => <Text evaProps style={styles.buttonText}>{updating ? <Spinner color = {WHITE}/> : "Mark As Read"}</Text>}
            </Button>}
        </View>
    )
};


export default Notification;

const styles = StyleSheet.create({
    button: {
        marginTop: 10
    },
    buttonText: {
        color: WHITE,
        fontSize: 20
    },
    notification: {
        fontSize: 15,
        color: BLACK
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