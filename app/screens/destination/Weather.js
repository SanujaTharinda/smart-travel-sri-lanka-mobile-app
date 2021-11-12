import React, { useEffect, useState} from 'react';
import { View, Text } from 'react-native'
import { getWeather } from '../../APIs/weatherAPI';


const Weather = ({ lat, long }) => {
    const [weatherData, setWeatherData ] = useState(null); 


    useEffect(() => {
        const loadWeather = async() => {
            const response = await getWeather(lat, long);
            if(response.success){
                setWeatherData(response.data);
            }
        };
        loadWeather();
    },[]);



    return(
        <View>
            {weatherData ? <Text>{Math.round(weatherData.main.temp)} degrees out with {weatherData.weather[0].description}</Text> : <Text>Error</Text>}
        </View>
    );
};

export default Weather;