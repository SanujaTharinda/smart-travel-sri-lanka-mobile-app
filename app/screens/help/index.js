import React from 'react'
import { Text, View, StyleSheet } from "react-native";
import { PRIMARY } from '../../theme/colors';

const Help = () => {
    return(
        <View>
            <Text style={styles.title}>Help</Text>
            <View style={styles.titleContainer}>
                <Text style = {styles.details}>Email: smart@travel.lk</Text>
                <Text style = {styles.details}>Telephone: 071-2111663</Text>
            </View>
        </View>
    )
}


export default Help;

const styles = StyleSheet.create({
    details: {
        fontSize: 18,
        fontWeight: 'bold',
        opacity: 0.7,
        marginVertical: 5
    },
    title: {
        fontSize: 25,
        color: PRIMARY,
        fontWeight: 'bold',
        marginTop: 5,
        alignSelf: 'center'
    },
    titleContainer: {
        paddingLeft: 20,
        marginTop: 15
    }
})