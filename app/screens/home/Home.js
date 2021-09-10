import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@ui-kitten/components';


const Home = () => {
    return (<View>
        <Text>Home Screen Test</Text>
        <Button onPress={() => console.log("Pressed")}>Hello</Button>
    </View>);
}

export default Home;