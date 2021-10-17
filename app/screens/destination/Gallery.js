import React, { useState } from 'react'
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import GridImageView from 'react-native-grid-image-viewer';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NoData from '../../components/common/NoData';
import { collections } from '../../firebase';
import { getDestinationImages } from '../../store/entities/destinations';
import { GREY, WHITE } from '../../theme/colors';


const ImageGallery = ({ destination }) => {
    useFirestoreConnect([
        {
            collection: "destinations",
            doc: destination.id,
            subcollections: [
                {
                    collection: 'gallery',
                    doc: 'images',
                }
            ],
            storeAs: 'destinationImages'
        }
    ]);

    const images = useSelector(getDestinationImages);

    return (<>
        {images && images.length > 0 ? <GridImageView data={images} /> : <NoData text = {'Images'}/>}</>
    )
};


export default ImageGallery;
