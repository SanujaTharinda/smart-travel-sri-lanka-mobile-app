import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox, Icon } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import { BLACK } from '../../theme/colors';


const CheckListItem = ({ item, isChecked, onCheck, onRemove }) => {
    return(
        <View style = {styles.container}>
            <CheckBox
                style = {styles.checkBox}
                checked={isChecked}
                onChange={(next) => onCheck(next)}
                >
                {(evaProps) => <Text {...evaProps} style = {styles.text}>{item}</Text>} 
            </CheckBox>
            <TouchableWithoutFeedback onPress = {onRemove}>
                <Icon style = {styles.icon} name="minus-circle-outline" fill = "red"/>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default React.memo(CheckListItem);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    checkBox: {
        marginVertical: 5,
        marginRight: 10,
        alignItems: "center",
        width: "67%"
    },
    icon: {
        width: 30,
        height: 30
    },

    text: {
        color: BLACK,
        fontWeight: "bold",
        paddingLeft: 10
    }
});