
import React from 'react';
import { Dimensions, StyleSheet, ScrollView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from '../../components/common/GeoCoder';
import { GREY } from '../../theme/colors';

const GooglePlacesInput = ( { onSelect }) => {
  return (
      <ScrollView 
      contentContainerStyle={{padding: 8}}
      horizontal = {true}
      showsVerticalScrollIndicator={false}
      style = {{width: Dimensions.get('screen').width}}
      keyboardShouldPersistTaps = {'always'}
      >
          <GooglePlacesAutocomplete
                styles = {{
                    container: styles.container,
                    textInput: styles.textInput,
                    textInputContainer: styles.textInputContainer,
                    listView: styles.listView
                }}

                placeholder='Search'
                onPress={async(data, details = null) => {
                    console.log("Pressed");
                    try {
                        const { results } = await Geocoder.from(data.description);
                        onSelect(results.pop().geometry.location);
                    } catch (e) {
                        console.log("Geocode Failed")
                    }
                    
                }}

                query={{
                    key: 'AIzaSyB2ncyvKA7X0gTVM1_s0AOG0zzOvNkJ4LY',
                    language: 'en',
                    components: 'country:LK',
                }}
        />
      </ScrollView>
    
  );
};

export default GooglePlacesInput;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width * 0.95,
    },
    listView: {
        height: Dimensions.get("screen").height * 0.3,
    },
    textInput: {
        backgroundColor: GREY,
        borderRadius: 10
    },
});