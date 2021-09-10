import React from 'react';
import { Text } from 'react-native';


const Error = ({ error }) => {
    return (<Text style={{
        fontSize: 15,
        color: 'red',
        marginLeft: 10
    }}>{error}</Text>);
}

export default Error;