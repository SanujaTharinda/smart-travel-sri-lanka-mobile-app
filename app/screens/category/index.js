import React from 'react';
import { ScrollView,StyleSheet, Text, View} from 'react-native';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import DestinationCard from './destinationCard';
import { Spinner } from '../../components/common/Spinner';
import { collections } from './../../firebase';
import { getPublishedDestinationsByCategory } from '../../store/entities/destinations';
import NoResults from '../../components/common/NoResults';
import { FlatList } from 'react-native-gesture-handler';
import Seperator from '../../components/common/Seperator';



const destinationsMock = [
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

    return (
       <FlatList
            style = {styles.container}
            data = {destinations}
            keyExtractor = {d => d.id}
            renderItem = {({ item }) => <DestinationCard destination = {item}/>}
            ItemSeparatorComponent = {Seperator}
       />
    );
}

export default Category;

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    }
})
