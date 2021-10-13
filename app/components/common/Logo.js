import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';


const Logo = () => {
    return(
        <Image
            source = {require('../../../assets/logo.png')}
            style = {styles.image}
        />
    );
};


export default Logo;


const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('screen').width, 
        height: "14%"
    }
});