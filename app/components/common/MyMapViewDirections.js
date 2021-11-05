import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { PRIMARY } from '../../theme/colors';

const API_KEY = "AIzaSyB2ncyvKA7X0gTVM1_s0AOG0zzOvNkJ4LY";

const MyMapViewDirections = ({origin, destination}) => {
    return(
        <MapViewDirections
            apikey={API_KEY}
            lineDashPattern={[0]}
            strokeColor = {PRIMARY}
            strokeWidth = {6}
            origin = {origin}
            destination = {destination}
        />
    )
};

export default MyMapViewDirections;