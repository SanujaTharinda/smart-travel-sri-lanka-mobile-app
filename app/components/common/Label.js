import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { PRIMARY } from '../../theme/colors';


const Label = ({text}) => {
    return(
        <Text style = {styles.text}>{text}</Text>
    )
};

export default Label;

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginBottom: 10,
        color: PRIMARY,
        fontWeight: "bold"
      }
});