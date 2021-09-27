import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { BLACK, PRIMARY } from '../../theme/colors';
import DestinationCard from './destinationCard';


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

    return (
        <ScrollView style={styles.container}>
            <DestinationCard
                image={category.source}
                title={"Temple of Tooth Relic"}
                shortDescription={"This is a Short Descroption"}
                rating={4}
             

            />
            <DestinationCard
                image={category.source}
                title={"Another Place"}
                shortDescription={"This is a Short Descroption"}
                rating={3}
      

            />
            <DestinationCard
                image={category.source}
                title={"Some Other Place"}
                shortDescription={"This is a Short Descroption"}
                rating={1}
            

            />
            <DestinationCard
                image={category.source}
                title={"Another Place"}
                shortDescription={"This is a Short Descroption"}
                rating={2}
               

            />
            <DestinationCard
                image={category.source}
                title={"Temple of Tooth Relic"}
                shortDescription={"This is a Short Descroption"}
                rating={3}
            />
            <DestinationCard
                image={category.source}
                title={"Temple of Tooth Relic"}
                shortDescription={"This is a Short Descroption"}
                rating={4}

            />

        </ScrollView>
    );
}

export default Category;

const styles = StyleSheet.create({

});


