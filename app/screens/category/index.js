import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';

const Category = ({ route }) => {
    const event = route.params;

    return (
        <View>
            <Image style={styles.image} source={event.source} />
            <Text>{event.text}</Text>
            <Text>{event.details}</Text>
        </View>
    );
}

export default Category;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: Dimensions.get('screen').height * 0.4
    }
});


