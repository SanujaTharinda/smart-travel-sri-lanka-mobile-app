import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { getPastTrips } from '../../store/entities/users';
import Trip from './Trip';
import TripPlan from './TripPlan';
import { Spinner } from '@ui-kitten/components';
import AnimatedEmpty from '../../components/common/AnimatedEmpty';

const Completed = () => {
    const trips = useSelector(getPastTrips);
    const [ viewMoreTrip, setViewMoreTrip ] = useState(null);
 
    return (
        <>
        {isLoaded(trips) && !isEmpty(trips) ?
             <ScrollView style = {styles.container} contentContainerStyle = {styles.contentContainer}>
             {viewMoreTrip ? 
                     <TripPlan 
                         plan = {{startLocation: viewMoreTrip.startLocation, tripDestinations: viewMoreTrip.destinations, id:viewMoreTrip.id, backpack: viewMoreTrip.backpack ? viewMoreTrip.backpack : []}}
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
             </ScrollView> : !isLoaded(trips) ? <Spinner/> : <AnimatedEmpty message = {"No Completed Trips To Display..."}/>
        }   
        </>
    )
};

export default React.memo(Completed);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        alignItems: "center"
    }
})
