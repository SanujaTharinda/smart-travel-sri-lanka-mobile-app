import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { GREY, PRIMARY, WHITE, BLACK } from '../../theme/colors';
import SearchBar from '../../components/common/SearchBar';
import Header from './Header';
import TripPlanner from './TripPlanner';
import Corousels from './Corousels';


const Home = () => {
    const images = [
        require('../../../assets/home/1.jpg'),
        require('../../../assets/home/2.jpg'),
        require('../../../assets/home/3.jpg'),
        require('../../../assets/home/4.jpg'),
        require('../../../assets/home/5.jpg')
    ];

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.headerContainer}>
                <Header images={images} />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.contentHeader}>
                    <Text style={styles.hiMessage}>Hi Traveller !</Text>
                    <Text style={styles.careMessage}>Care to explore an adventure of a lifetime?...</Text>
                    {/* <SearchBar/> */}
                </View>
                <TripPlanner />
                <Corousels />
            </View>
        </ScrollView>);
}

export default Home;


const styles = StyleSheet.create({
    careMessage: {
        fontWeight: 'normal',
        fontStyle: 'italic',
        fontSize: 17,
        marginTop: 5,
        position: 'relative',
        left: 20
    },
    container: {
        overflow: 'scroll',
    },
    contentContainer: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    contentHeader: {
        marginTop: 10,
    },
    headerContainer: {
        width: '100%'
    },

    hiMessage: {
        color: PRIMARY,
        fontWeight: 'bold',
        fontSize: 20
    },
})