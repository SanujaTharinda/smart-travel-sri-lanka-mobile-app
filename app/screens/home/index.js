import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { GREY, PRIMARY, WHITE, BLACK } from '../../theme/colors';
import SearchBar from '../../components/common/SearchBar';
import TripPlanner from './TripPlanner';
import Corousels from './Corousels';

const Home = () => {

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.hiMessage}>Hi Traveller !</Text>
                <Text style={styles.careMessage}>Care to explore an adventure of a lifetime?...</Text>
                <SearchBar />
            </View>
            <TripPlanner />
            <Corousels />
        </ScrollView>);
}

export default Home;


const styles = StyleSheet.create({
    careMessage: {
        fontWeight: 'normal',
        fontSize: 17,
        marginTop: 5
    },
    container: {
        overflow: 'scroll',
        paddingLeft: 15,
        paddingRight: 15,
    },
    header: {
        marginTop: 10,
    },
    hiMessage: {
        color: PRIMARY,
        fontWeight: 'bold',
        fontSize: 20
    },
})