import React from 'react'
import { View,Text, Image, StyleSheet, Dimensions } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { GREY, PRIMARY, WHITE } from '../../theme/colors';

const Review = ({ review }) => {
    return(
        <View style = {styles.wrapper}>
            <View style = {styles.container}>
                <Image style = {styles.image} source = {review.profileURL ? {uri: review.profileURL} : require('../../../assets/icon.png')}/>
                <View style = {styles.contentContainer}>
                        <Text style = {styles.userName}>{review.userName}</Text>
                        <AirbnbRating
                            count={5}
                            showRating={false}
                            defaultRating={review.rating}
                            size={18}
                            isDisabled={true}
                            selectedColor={PRIMARY}
                        />
                
                </View>
            </View>
            <View style = {styles.commentContainer}>
                <Text style = {styles.comment}>{review.comment}</Text>

            </View>
        </View>
    );
}

export default Review;


const styles = StyleSheet.create({
    comment: {
        paddingLeft: 20
    },
    commentContainer:{
        marginVertical: 4,
        alignItems: 'center',
        marginTop: 20
    },
    container: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        flex: 1
    },
    contentContainer: {
        padding: 10,
        justifyContent: 'center',
        marginLeft: 20,
        
    },  
    image: {
        width: 70,
        height: 70,
        flex: 0.3,
        borderRadius: 35
    },
    userName: {
        fontSize: 15
    },
    wrapper: {
        backgroundColor: GREY,
        marginVertical: 10,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 10
    }
})