import React, { useEffect, useState } from 'react'
import { View, Image, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import { BLACK, DARKGREY, GREY, PRIMARY, WHITE } from '../../theme/colors';
import { useFirestoreConnect } from 'react-redux-firebase';
import Reviews from './Reviews';
import { collections } from './../../firebase';
import { useSelector } from 'react-redux';
import { getReviews } from '../../store/entities/destinations';
import Map from './Map';
import AddReview from './AddReview';
import { getAuth } from '../../store/auth';
import { getWeather } from '../../APIs/weatherAPI';
import Weather from './Weather';

const BasicInfo = ({ destination }) => {
    useFirestoreConnect([{ 
        collection: collections.destinations.name, 
        doc: destination.id, 
        subcollections: [{collection: collections.destinations.reviews.name} ],
        storeAs: collections.destinations.reviews.name
    
    } 
    ]);
    const reviews = useSelector(getReviews);
    const auth = useSelector(getAuth);
    const [ alreadyReviewed, setAlreadyReviewed ] = useState(false);

    useEffect(() => {
        const element = reviews.find(r => r.userId === auth.uid);
        if(element)setAlreadyReviewed(true);
    }, [reviews])

    

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
                {!alreadyReviewed && <AddReview destinationID = {destination.id}/>}
                <Reviews reviews = {reviews}/>
                <Text style = {styles.sectionTitle}>Map</Text>
                <Map location = {destination.coords}/>
                <Text style = {styles.sectionTitle}>Weather</Text>
                <Weather lat = {destination.coords[0]} long = {destination.coords[1]}/>

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
