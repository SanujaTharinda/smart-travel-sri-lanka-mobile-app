import React from 'react';
import Review from './Review';
import NoResults from './../../components/common/NoResults';
import NoData from '../../components/common/NoData';


const Reviews = ({ reviews }) => {

    return(
        <>
            {reviews && reviews.length > 0 ? reviews.map((r, index) => <Review review = {r} key = {index}/>) : <NoData text = {"Reviews"}/>}
        </>
    )
};

export default Reviews;