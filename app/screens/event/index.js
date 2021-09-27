import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { PRIMARY } from '../../theme/colors';
import moment from 'moment';
import Spinner from '../../components/common/Spinner';

const Event = ({ route }) => {
    const event = route.params;

    return (<>
            {event ? <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.image} source={{uri: event.url}} />
                <Text style={styles.title}>{event.title}</Text>
                <View style={styles.contentContainer}>
                    <Text style={styles.date}>From: {moment(event.date.from.toDate()).format("MM/DD/YYYY")}</Text>
                    <Text style={styles.date}>To: {moment(event.date.to.toDate()).format("MM/DD/YYYY")}</Text>
                    <Text style={styles.venue}>Venue: {event.venue}</Text>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.details}>{event.overview}</Text>
                    </View>

                </View>
            </ScrollView> : <Spinner/>}
        </>
    );
}

export default Event;

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 20
    },
    container: {
        alignItems: 'flex-start',
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
        marginTop: 5,
        alignSelf: 'center'
    },
    venue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    }
});


