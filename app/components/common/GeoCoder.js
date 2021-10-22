import Geocoder from 'react-native-geocoding';

// Initialize the module (needs to be done only once)
Geocoder.init("AIzaSyB2ncyvKA7X0gTVM1_s0AOG0zzOvNkJ4LY", {language : "en"}); // use a valid API key

// Search by address
// Geocoder.from("Colosseum")
// 		.then(json => {
// 			var location = json.results[0].geometry.location;
// 			console.log(location);
// 		})
// 		.catch(error => console.warn(error));

export default Geocoder;


