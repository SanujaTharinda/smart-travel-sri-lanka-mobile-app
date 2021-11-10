import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { getPastTrips } from '../../store/entities/users';
import Trip from './Trip';
import TripPlan from './TripPlan';
import { Spinner } from '@ui-kitten/components';

export default function Completed() {
    const trips = useSelector(getPastTrips);
    const [ viewMoreTrip, setViewMoreTrip ] = useState(null);
 
    
    useEffect(() => {
   
    });

    return (

        <>
        {trips ? 
             <ScrollView style = {styles.container} contentContainerStyle = {styles.contentContainer}>
             {viewMoreTrip ? 
                     <TripPlan 
                         plan = {{startLocation: viewMoreTrip.startLocation, tripDestinations: viewMoreTrip.destinations}}
                         onGoBackPress = {() => setViewMoreTrip(null)}
                 />: trips.map((t, i) => (
                     <Trip 
                         key = {"Ongoin" + i.toString()}
                         onViewMorePress = {() => setViewMoreTrip(t)}
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
