import React from 'react';
import GridImageView from 'react-native-grid-image-viewer';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { getDestinationImages } from '../../store/entities/destinations';
import AnimatedEmpty from "../../components/common/AnimatedEmpty";

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
            {isLoaded(images) && images.length > 0 ? <GridImageView data={images} /> : <AnimatedEmpty message = "No Images To Display..."/>}
        </>
    )
};


export default React.memo(ImageGallery);
