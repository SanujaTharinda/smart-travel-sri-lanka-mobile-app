import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { BLACK } from '../../theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Element = ({text, icon, destination, screen }) => {
    const navigaion = useNavigation();

    return(
                <TouchableOpacity onPress = {() => navigaion.navigate(destination, screen ? {screen} : {})} style = {styles.container}>
                    <Icon
                        style={styles.icon}
                        fill={BLACK}
                        name={icon}
                    />
                    <Text style = {styles.text}>{text}</Text>
                </TouchableOpacity>
    ) 
}

export default Element;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 10,
        marginTop: 15
    },
    icon: {
        width: 23,
        height: 23,
    },
    text: {
        color: BLACK,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 3
    }
});