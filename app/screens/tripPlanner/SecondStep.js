import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Spinner from '../../components/common/Spinner';
import GooglePlacesInput from './GooglePlacesInput';
import { BLACK, DARKGREY, GREY, WHITE } from '../../theme/colors';

const SecondStep =  ({ startLocation, setStartLocation }) => {
  const [userLocation, setUserLocation] = useState(startLocation);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setStartLocation(userLocation);
  })

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      if(!startLocation){
        let location = await Location.getCurrentPositionAsync({});
        setUserLocation(location);
        console.log(location)
      }
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (userLocation) {
    text = JSON.stringify(userLocation);
  }

  return (
    <View 
      style={styles.container}>
        {userLocation ? 
          <>
          <Text style = {styles.title}>Start Location</Text>
          <GooglePlacesInput
              onSelect = {(location) => {
                setUserLocation({...userLocation, coords: {...userLocation.coords,latitude: location.lat, longitude: location.lng}});
              }}
          />
          <View style = {styles.mapContainer}>
              <MapView 
                region = {{
                  latitude: parseFloat(userLocation.coords.latitude),
                  longitude: parseFloat(userLocation.coords.longitude),
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421}}
                style = {styles.map} 
                initialRegion={{
                    latitude: parseFloat(userLocation.coords.latitude),
                    longitude: parseFloat(userLocation.coords.longitude),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421}}
              >
                <Marker 
                  draggable
                  coordinate={userLocation.coords}
                  onDragEnd={(e) => setUserLocation({...userLocation, coords: {...userLocation.coords,...e.nativeEvent.coordinate}})}
                />
              </MapView>
              <Text style = {styles.mapText}>Press and hold marker to drag  and change location</Text>
              
          </View>
        </> : <Spinner/>}

    </View>
  );
};

export default React.memo(SecondStep);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  mapContainer: {
    marginTop: 4,
    overflow: "hidden",
    flex: 1,
    backgroundColor: GREY,
    width: Dimensions.get('window').width * 0.93,
    height: Dimensions.get('window').height * 0.35,
    borderRadius: 20,
    elevation: 2,
    alignItems: 'center',
  },  
  map: {
    width: '100%',
    height: '90%'
  },
  mapText: {
    color: BLACK
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  }
})
