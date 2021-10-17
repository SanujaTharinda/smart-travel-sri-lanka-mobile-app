import React from 'react';
import { View, StyleSheet } from "react-native"

const Seperator = () => {
    return(
        <View
            style = {styles.seperator}
        />
    )
};

export default Seperator;

const styles = StyleSheet.create({
    seperator: {
        width: '100%', 
        height: 20
    }
})