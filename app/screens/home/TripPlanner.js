import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from '@ui-kitten/components';
import SvgUri from 'react-native-svg-uri';
import { PRIMARY, WHITE, GREY } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '../../constants';

const TripPlanner = () => {
    const navigator = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style = {{width: '100%'}} onPress = {() => navigator.navigate(NAVIGATION.tripPlanner)}>
                <Card style={styles.card}>
                    <SvgUri
                        width = {'100%'}
                        source={require('../../../assets/home/suitcase.svg')}
                    />
                    <Text style={styles.cardText}>Trip Planner</Text>
                </Card>
            </TouchableOpacity>
        </View>);
}

export default TripPlanner;

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: '85%',
        backgroundColor: PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        color: WHITE,
        fontSize: 20,
        marginTop: 10
    },
    container: {
        backgroundColor: GREY,
        width: '100%',
        height: Dimensions.get('window').height * 0.5,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },

})