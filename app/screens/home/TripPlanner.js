import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from '@ui-kitten/components';
import { PRIMARY, WHITE, GREY } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '../../constants';

const TripPlanner = () => {
    const navigator = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style = {styles.touchableElement} onPress = {() => navigator.navigate(NAVIGATION.tripPlanner.navigator, {screen: NAVIGATION.tripPlanner.first})}>
                <Card style={styles.card}>
                    <Image
                        style = {styles.image}
                        source={require('../../../assets/home/suitcase.png')}
                    />
                    <Text style={styles.cardText}>Trip Planner</Text>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.touchableElement} onPress= {() => navigator.navigate(NAVIGATION.myTrips.navigator)}>
                <Card style={styles.card}>
                    <Image
                        style = {styles.image}
                        source={require('./../../../assets/home/travelGirl.png')}
                    />
                    <Text style={styles.cardText}>My Trips</Text>
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
        borderRadius: 20,
        elevation: 5
    },
    cardText: {
        color: WHITE,
        fontSize: 20,
        marginTop: 10
    },
    container: {
        flex: 1,
        height: Dimensions.get('window').height * 0.5,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    touchableElement: {
        flex: 1, 
        justifyContent: 'center',
        elevation: 10
    },
    image: {
        width: Dimensions.get('screen').width * 0.3,
        height: "70%"
    }

})