import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { PRIMARY, BLACK, GREY } from '../../theme/colors';
import { AirbnbRating } from 'react-native-ratings';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '../../constants';

const DestinationCard = ({ destination }) => {
    const navigator = useNavigation();
    return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{uri: destination.mainPhoto}}
                        style={styles.image}
                    />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{destination.title}</Text>
                    <Text style={styles.shortDescription}>{destination.description}</Text>
                    <TouchableOpacity onPress = {() => navigator.navigate(NAVIGATION.destination, {destination})}>
                        <Text style={styles.readMore}>Read More...</Text>
                    </TouchableOpacity>
                    <View style={styles.ratingContainer}>
                        <AirbnbRating
                            count={5}
                            showRating={false}
                            defaultRating={4}
                            size={15}
                            isDisabled={true}
                            selectedColor={PRIMARY}

                        />

                    </View>

                </View>
            </View>
        </View>
    );
}

export default DestinationCard;

const styles = StyleSheet.create({
    card: {
        borderRadius: 30,
        elevation: 4,
        minHeight: Dimensions.get('screen').height * 0.2,
        width: '95%',
        flexDirection: 'row',
        marginVertical: 15
    },
    cardContainer: {
        alignItems: 'center'
    },
    detailsContainer: {
        width: '65%',
        height: '100%',
        paddingLeft: 10,
        justifyContent: 'space-around',
        backgroundColor: GREY
    },
    imageContainer: {
        width: '35%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20
    },
    ratingContainer: {
        flexDirection: 'row',
        color: PRIMARY
    },
    readMore: {
        color: PRIMARY,
        fontWeight: 'bold'
    },
    shortDescription: {
        opacity: 0.75
    },
    title: {
        color: BLACK,
        fontSize: 20,
        fontWeight: 'bold'
    }
});


