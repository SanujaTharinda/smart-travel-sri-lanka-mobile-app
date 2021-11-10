import React, { useEffect, useState } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { getInFutureTrips } from '../../store/entities/users';
import Trip from './Trip';
import TripPlan from './TripPlan';
import { Spinner } from '@ui-kitten/components';

export default function InFuture() {
    const trips = useSelector(getInFutureTrips);
    const [ viewMoreIndex, setViewMoreIndex ] = useState(null);
 
    
    useEffect(() => {
        console.log(viewMoreIndex);
        console.log(trips[0]);
    });

    return (

        <>
        {trips ? 
             <ScrollView style = {styles.container} contentContainerStyle = {styles.contentContainer}>
             {viewMoreIndex ? 
                     <TripPlan 
                         plan = {{startLocation: trips[viewMoreIndex].startLocation, tripDestinations: trips[viewMoreIndex].destinations}}
                         onGoBackPress = {() => setViewMoreIndex(null)}
                 />: trips.map((t, i) => (
                     <Trip 
                         key = {i.toString()}
                         onViewMorePress = {() => setViewMoreIndex(i)}
                         trip = {{
                             title: t.name,
                             startDate: t.startDate.toDate().toDateString(),
                             endDate: t.endDate.toDate().toDateString(),
                             destinations: t.destinations.map(d => d.title)
                         }}/>
             ))}
             </ScrollView> : <Spinner/>
        }
           
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        alignItems: "center"
    }
})
