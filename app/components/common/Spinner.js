import React from 'react'
import { ActivityIndicator } from 'react-native';
import { PRIMARY } from '../../theme/colors';

const Spinner = ({ color }) => {
    return(
        <ActivityIndicator size="large" color={color ? color : PRIMARY} />
    )
};

export default Spinner;