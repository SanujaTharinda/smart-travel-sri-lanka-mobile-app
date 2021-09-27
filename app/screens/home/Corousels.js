import React from 'react';
import ScrollableCorousel from '../../components/common/ScrollableCorousel';
import { NAVIGATION } from '../../constants';
import CategoryCorousel from './CategoryCorousel';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { collections } from './../../firebase';
import { getEvents } from '../../store/entities/events';


const Corousels = () => {
    useFirestoreConnect([
        collections.events.name
    ]);

    const events = useSelector(getEvents);


    return (<>
        <CategoryCorousel/>
        <ScrollableCorousel
            title='Upcoming Events'
            destination={NAVIGATION.event}
            elements={events ? events.filter(e => e.published) : []}
        />
        
    </>
    );
}

export default Corousels;