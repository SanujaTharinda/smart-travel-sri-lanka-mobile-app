import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { PRIMARY } from '../../theme/colors';

const Event = ({ route }) => {
    const event = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.image} source={event.source} />
            <Text style={styles.title}>{event.title}</Text>
            <View style={styles.contentContainer}>
                <Text style={styles.date}>Date: {event.date}</Text>
                <Text style={styles.venue}>Venue: Araound The Country</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.details}>{event.details}</Text>
                </View>

            </View>
        </ScrollView>
    );
}

export default Event;

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 20
    },
    container: {
        alignItems: 'center',
        paddingBottom: 10
    },
    date: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 10
    },
    details: {
        fontSize: 15,
        fontWeight: 'bold',
        opacity: 0.7,
    },
    detailsContainer: {
        marginTop: 15
    },
    image: {
        width: "100%",
        height: Dimensions.get('screen').height * 0.35
    },
    title: {
        fontSize: 25,
        color: PRIMARY,
        fontWeight: 'bold',
        marginTop: 5
    },
    venue: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});


