import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { DARKGREY, PRIMARY } from '../../theme/colors';

const NoData = ({text}) => {

    return( 
        <View style = {styles.container}>
            <Text style = {styles.text}>No {text}</Text>
        </View>
    
    );

}

export default NoData;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 20
    },
    text: {
        color: DARKGREY,
        fontSize: 30
    }
})