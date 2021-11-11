import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Text, Input } from '@ui-kitten/components';
import Spinner from '../../components/common/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from "react-native-ratings";
import { BLACK, GREY, PRIMARY, WHITE } from '../../theme/colors';
import { getAuth, getProfile } from '../../store/auth';
import { addReview, getReviewAddingStatus } from '../../store/entities/users';

const useInputState = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
  };
  

const AddReview = ({ destinationID }) => {
    const dispatch = useDispatch();
    const [ rating, setRating ] = useState(5);
    const multilineInputState = useInputState();
    const auth = useSelector(getAuth);
    const profile = useSelector(getProfile);
    const adding = useSelector(getReviewAddingStatus);

    const handleAddReview = () => {
        const review = {
            comment: multilineInputState.value,
            rating,
            profileURL: profile.photoURL ? profile.photoURL : "",
            userId: auth.uid,
            userName: `${profile.firstName}${profile.lastName}`
        };
        dispatch(addReview(review, destinationID));
    };

    const Header = (props) => (
        <View {...props} style = {styles.header}>
          <Text category='h6' style = {styles.headerText}>Add Review</Text>
        </View>
    );

    const Footer = (props) => (
        <View {...props} style={[props.style, styles.footerContainer]}>
          <Button
            style={styles.footerControl}
            onPress = {handleAddReview}
            size='small'
            disabled = {props.adding}>
            {props.adding ? <Spinner color = {WHITE}/> : 'Add'}
          </Button>
        </View>
    );


    return(<Card style={styles.card} header={() => <Header adding = {adding}/>} footer={Footer}>
            <Rating
                onFinishRating={(rating) => setRating(rating)}
                type = "custom"
                startingValue = {5}
                ratingTextColor = {PRIMARY}
                ratingColor = {PRIMARY}
                tintColor = {GREY}
                style={{ paddingVertical: 10 }}
            />
            <Input
                multiline={true}
                textStyle={{ minHeight: 150, color: BLACK }}
                placeholder='Tell us what you think...'
                {...multilineInputState}
            />
        </Card>);
};

export default React.memo(AddReview);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        flex: 1,
        margin: 2,
        borderRadius: 30,
        backgroundColor: GREY
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
    },
    footerControl: {
        marginHorizontal: 2,
        color: PRIMARY
    },
    header: {
        alignItems: "center",
        padding: 10

    },
    headerText : {
        color: PRIMARY,
        fontWeight: "bold"
    }
})