import React from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { GREY, WHITE } from '../../theme/colors';
import MyMapViewDirections from './../../components/common/MyMapViewDirections';


const TripMap = ({ start, destinations }) => {
    const last = destinations[destinations.length - 1];
    return(
        <View style = {styles.container}>
            <View style = {styles.mapContainer}>
                <MapView style = {styles.map}
                    initialRegion = {{
                        latitude: start.latitude,
                        longitude: start.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                >
                    <Marker coordinate = {{ latitude: start.latitude , longitude: start.longitude }} title = {"Start Here"}/>
                    {destinations.map((d, i) =>
                        <Marker
                            key = {i}
                            coordinate = {{ latitude: Number(d.coords[0]), longitude: Number(d.coords[1]) }}
                            title = {(i + 1).toString()}
                            
                            />)
                    }
                    <MyMapViewDirections
                        origin = {start}
                        destination = {{latitude: Number(destinations[0].coords[0]), longitude:Number(destinations[0].coords[1])}}
                    />
                    {destinations.length > 1 ? destinations.map((d,i) =>{
                        if((i === destinations.length - 1) || i === 0) return <></>;
                        return(<MyMapViewDirections
                            key = {i}
                            origin = {{ latitude: Number(d.coords[0]), longitude: Number(d.coords[1]) }}
                            destination = {{latitude: Number(destinations[i + 1].coords[0]), longitude:Number(destinations[i + 1].coords[1])}}
                        />);
                    }) : <></>}
                    <MyMapViewDirections
                        origin = {{latitude: Number(last.coords[0]) , longitude: Number(last.coords[1]) }}
                        destination = {start}
                    />
                </MapView>
            </View>
        </View>
    );
};

export default TripMap;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        alignItems: 'center'
    },
    map: {
        width: '100%',
        height: '100%'
    },
    mapContainer: {
        marginVertical: 15,
        overflow: 'hidden',
        flex: 1, 
        backgroundColor: GREY,
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get('window').height * 0.48,
        borderRadius: 20,
        elevation: 3,
        alignItems: 'center',
        justifyContent: "center"
    }
});