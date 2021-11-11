import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { PRIMARY, BLACK } from '../../theme/colors';

const Activity = ({activity}) => {
    return(
        <View style = {styles.container}>
            {/* <View style = {styles.titleContainer}>
              <Text style = {styles.title}>{activity.name}</Text>
            </View>
            <Text style = {styles.description}>{activity.description}</Text> */}
        </View>

    )
};

export default Activity;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    description: {
        fontSize: 15,
        fontWeight: 'bold',
        opacity: 0.48,
        color: BLACK,
    
    },  
    title: {
        color: PRIMARY,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    titleContainer: {
        width: "100%",
        alignItems: 'center',
        paddingVertical: 8
        
    }
});