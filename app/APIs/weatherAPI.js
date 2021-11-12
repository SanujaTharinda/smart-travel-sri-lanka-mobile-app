import axios from 'axios';
const API_KEY = '98d247f2b7e3a22f4144ba281fef07e6';


export async function getWeather(lat, long){
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long.toString().trim()}&units=metric&appid=${API_KEY}`;
        const response = await axios.get(url);
        return {
            success: true,
            data: response.data
        };

    } catch (error) {
        console.log(error);
        return {
            success: false,
            error: error
        }
    }
}

