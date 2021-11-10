import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { BLACK, GREY, PRIMARY } from '../../theme/colors';

const ElementRow = ({ property, value, icon, seperator = true }) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.propertyContainer}>
                <Icon style = {styles.icon} name = {icon} fill = {BLACK}/>
                <Text style = {styles.property}>{property}</Text>
            </View>
            <View style = {styles.valueContainer}>
                <Text style = {styles.value}>{value}</Text>
            </View>
            {/* <View style = {styles.seperator}/> */}
        </View>
    );
};

export default ElementRow;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 30,
        opacity: 0.8,
        padding: 10
    },
    icon: {
        width: 22,
        height: 22
    },
    propertyContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 3
    },
    property: {
        color: BLACK,
        fontSize: 16,
        opacity: 0.6,
        fontWeight: "bold",
        marginLeft: 13
    },
    seperator: {
        borderColor: PRIMARY,
        borderWidth: 0.3,
        width: Dimensions.get("screen").width * 0.8,
        marginTop: 5,
        elevation: 1
    },
    valueContainer: {
        paddingLeft: 35,
        color: PRIMARY
    },
    value: {
        color: BLACK,
        fontSize: 18,
        fontWeight: "bold"
    }

});