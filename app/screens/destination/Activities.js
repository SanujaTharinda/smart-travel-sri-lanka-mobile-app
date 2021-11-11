import React from 'react'
import { ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { collections } from '../../firebase';
import { getActivities } from '../../store/entities/destinations';
import Activity from './Activity';
import AnimatedEmpty from "../../components/common/AnimatedEmpty";
import Spinner from "../../components/common/Spinner";


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
    ]);

    const activities = useSelector(getActivities);

    return (<>
        {!isLoaded(activities) ? <Spinner/> : activities.length > 0 ? <ScrollView>{activities.map(a =><Activity key = {a.id} activity = {a}/>)}</ScrollView> : <AnimatedEmpty message = "No Activities To Display..."/>}
        </>
    )
};


export default React.memo(Activities);
