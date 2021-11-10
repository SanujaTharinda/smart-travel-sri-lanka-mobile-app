import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import LottieView from 'lottie-react-native';
import { BLACK, PRIMARY, WHITE } from '../../../theme/colors';

const AnimatedEmpty = ({ message = "Empty. Nothing to display..." }) => {
    

    return(
        <View style = {styles.container}>
            <LottieView 
                source = {require('./empty.json')} 
                autoPlay 
                loop
                style = {{
                    backgroundColor: WHITE
                }}
            />
            <Text style = {styles.message}>{message}</Text>
        </View>
    )
};

export default AnimatedEmpty;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    message: {
        color: BLACK,
        fontWeight: "bold",
        fontSize: 18,
        position: "absolute",
        bottom: Dimensions.get("window").height * 0.25
    }

})