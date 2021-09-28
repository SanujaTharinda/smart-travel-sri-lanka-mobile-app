import React from 'react';
import { ScrollView,StyleSheet, Text} from 'react-native';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import DestinationCard from './destinationCard';
import { Spinner } from '../../components/common/Spinner';
import { collections } from './../../firebase';
import { getPublishedDestinationsByCategory } from '../../store/entities/destinations';
import NoResults from '../../components/common/NoResults';



const destinations = [
    {
        id: 1,
        data: [{
            title: "Temple of Tooth Relic",
            rating: 5,
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime mollitia,molestiae quas vel sint commodi."
        },
        {
            title: "Some Place",
            rating: 4,
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime mollitia,molestiae quas vel sint commodi."
        },
        {
            title: "Another Place",
            rating: 5,
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime mollitia,molestiae quas vel sint commodi."
        }

        ]
    },
    {
        id: 2,
        data: []
    },
    {
        id: 3,
        data: []
    },
    {
        id: 4,
        data: []
    },
]



const Category = ({ route }) => {
    const category = route.params;
    useFirestoreConnect([
        collections.destinations.name
    ]);
    const destinations = useSelector(getPublishedDestinationsByCategory(category.title));
    console.log(destinations)

    return (
        <ScrollView style={styles.container}>
            {destinations && destinations.length > 0 ? destinations.map(d => 
                <DestinationCard
                    destination = {d}
                /> 
            ): destinations ? <NoResults/> : <Spinner/>}
        </ScrollView>
    );
}

export default Category;

const styles = StyleSheet.create({

});


