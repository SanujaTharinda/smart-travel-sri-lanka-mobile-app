import React, { useEffect, useState } from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { getInFutureTrips } from '../../store/entities/users';
import Trip from './Trip';
import TripPlan from './TripPlan';
import { Spinner } from '@ui-kitten/components';
import AnimatedEmpty from '../../components/common/AnimatedEmpty';

const InFuture = () => {
    const trips = useSelector(getInFutureTrips);
    const [ viewMoreIndex, setViewMoreIndex ] = useState(null);
 
    return (
        <>
        {isLoaded(trips) && !isEmpty(trips) ? 
             <ScrollView style = {styles.container} contentContainerStyle = {styles.contentContainer}>
             {viewMoreIndex ? 
                     <TripPlan 
                         plan = {{startLocation: trips[viewMoreIndex].startLocation, tripDestinations: trips[viewMoreIndex].destinations, id:trips[viewMoreIndex].id, backpack: trips[viewMoreIndex].backpack ? trips[viewMoreIndex].backpack : [] }}
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
             </ScrollView> : !isLoaded(trips) ? <Spinner/> : <AnimatedEmpty message = {"No Future Trips To Display..."}/>
        }      
        </>
    )
};

export default React.memo(InFuture);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        alignItems: "center"
    }
})
