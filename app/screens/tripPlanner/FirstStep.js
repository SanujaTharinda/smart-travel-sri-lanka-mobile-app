import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';

import Datepicker from '../../components/common/Datepicker';
import Selector from '../../components/common/Selector';


const FirstStep = ({ states, setters, travelModes, error }) => {
    return(
           <View style={styles.plannerBox}>
                <Datepicker 
                    label = {"Start Date"}
                    date = {states.startDate}
                    setDate = {setters.setStartDate}
                />
                <Datepicker 
                    label = {"End Date"}
                    date = {states.endDate}
                    setDate = {setters.setEndDate}
                />
                <Selector 
                    label = "Travel Mode"
                    options = {travelModes}
                    onChange = {(travelMode) => setters.setTravelMode(travelMode)}
                    initialIndex = {travelModes.indexOf(states.travelMode)}
                />
                <Text style = {{ color: "red"}}>{error}</Text>
            </View>

    );
};


export default React.memo(FirstStep);

const styles = StyleSheet.create({
    plannerBox: {
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: Dimensions.get('screen').height * 0.01
    },
  })