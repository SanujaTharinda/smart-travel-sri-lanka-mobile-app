import React from 'react'
import { View, Image, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import { BLACK, DARKGREY, GREY, PRIMARY } from '../../theme/colors';
import { useFirestoreConnect } from 'react-redux-firebase';
import Reviews from './Reviews';
import { collections } from './../../firebase';
import { useSelector } from 'react-redux';
import { getReviews } from '../../store/entities/destinations';
import Map from './Map';

const BasicInfo = ({ destination }) => {
    useFirestoreConnect([{ 
        collection: collections.destinations.name, 
        doc: destination.id, 
        subcollections: [{collection: collections.destinations.reviews.name} ],
        storeAs: collections.destinations.reviews.name
    
    } 
    ]);
    const reviews = useSelector(getReviews);

    return (
        <ScrollView>
            <Image style = {styles.image} source = {{uri: destination.mainPhoto}}/>
            <View style = {styles.titleContainer}>
              <Text style = {styles.title}>{destination.title}</Text>
            </View>
            <View style = {styles.contentContainer}>
                <Text style = {styles.sectionTitle}>Overview</Text>
                <Text style = {styles.overview}>{destination.overview}</Text>
                <Text style = {styles.sectionTitle}>Reviews</Text>
                <Reviews reviews = {reviews}/>
                <Text style = {styles.sectionTitle}>Map</Text>
                <Map location = {destination.coords}/>
            </View> 
        </ScrollView>
    )
};


export default BasicInfo;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexGrow: 1,
    },
    contentContainer: {
        padding: 20
    },
    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.35,
    },
    title: {
        color: PRIMARY,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    titleContainer: {
        width: "100%",
        alignItems: 'center',
        paddingVertical: 8
        
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 12,
        color: BLACK
    },
    overview: { 
        fontSize: 15,
        fontWeight: 'bold',
        opacity: 0.48,
        color: BLACK
    }
})
