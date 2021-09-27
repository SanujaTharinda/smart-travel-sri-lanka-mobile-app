import React from 'react'
import { View, Text } from 'react-native';


const destination = {
    title: "Seegiriya",
    address: "Seegiriya, Sri Lanka",
    overview: "lorem ipsum ewefwefwfwdfwewfwefwfwfwfewefwefwfwef"
};


export default () => {
   
    return (
        <View>
            <Text>{destination.title}</Text>
            <Text>{destination.overview}</Text>
            <Text>{destination.address}</Text>
        </View>
    );
}