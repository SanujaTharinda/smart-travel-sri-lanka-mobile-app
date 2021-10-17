import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { collections } from '../../firebase';
import { getActivities } from '../../store/entities/destinations';
import Activity from './Activity';


const Activities = ({ destination }) => {
    useFirestoreConnect([
        {
            collection: collections.destinations.name,
            doc: destination.id,
            subcollections: [{
                collection: 'activities'
            }],
            storeAs: 'activities'
        }
    ])

    const activities = useSelector(getActivities);
    return (
        <ScrollView>
            {activities.map(a => <Activity key = {a.id} activity = {a}/>)}
            
        </ScrollView>
    )
};


export default Activities;