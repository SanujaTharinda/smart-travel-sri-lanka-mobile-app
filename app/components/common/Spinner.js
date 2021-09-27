import React from 'react'
import { ActivityIndicator } from 'react-native';
import { PRIMARY } from '../../theme/colors';

const Spinner = () => {
    return(
        <ActivityIndicator size="large" color={PRIMARY} />
    )
};

export default Spinner;