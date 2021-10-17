import React from 'react'
import { Text, View, StyleSheet } from "react-native";
import { PRIMARY } from '../../theme/colors';

const About = () => {
    return(
        <View>
            <Text style={styles.title}>About</Text>
            <View style={styles.titleContainer}>
                <Text style = {styles.details}>Product Name: Smart Travel Sri Lanka</Text>
                <Text style = {styles.details}>Version: 1.0</Text>
                <Text style = {styles.details}>Company: SE-Group 35</Text>
            </View>
        </View>
    )
}


export default About;

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