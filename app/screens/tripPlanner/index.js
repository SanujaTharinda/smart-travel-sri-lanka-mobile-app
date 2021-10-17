import React from 'react';
import { Button, View, Text} from 'react-native';
import firebase, { functions } from './../../firebase';

const TripPlanner = () => {

    return(
        <View>
            <Text>Trip Planner</Text>
            <Button 
                title = 'Get' 
                onPress = {async() => {
                    try{
                        console.log("Pressed");
                        const preferences = ["Religious", "Natural"];
                        const getDestinations = functions.httpsCallable("getPreferedDestinations");
                        const response = await getDestinations(preferences);
                        console.log(JSON.parse(response.data));
                        
                    }catch(e){
                        console.log("Error");
                        console.log(e);
                    }
                    
                }}/>
        </View>
    ) 
}

export default TripPlanner;
