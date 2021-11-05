import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Map({ location }) {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion = {{
          latitude: parseFloat(location[0]),
          longitude: parseFloat(location[1]),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
       
      }}>
          <Marker
            coordinate={{ latitude :parseFloat(location[0]) , longitude : parseFloat(location[1]) }}
            title={"Sigiriya"}
          
          >
                
          </Marker>


      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden",
    borderRadius: 20,
    elevation: 2
  },
  map: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.5,
  },
});