import React, { useState } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { GREY, PRIMARY, WHITE, BLACK } from '../../theme/colors';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const travelModes = [
  "Bike",
  "Bus"
];

const TripPlannerFirst = () => {
  const [ travelMode, setTravelMode ] = useState(travelModes[0]);
  const [ startDate, setStartDate ] = useState(new Date());
  const [ endDate, setEndDate ] = useState(new Date());
  const [ startLocation, setStartLocation ] = useState(null);
  const [ preferredCategories, setPrefferedCategories ] = useState([]);


  const handleGenerate = () => {
        console.log(travelMode);
        console.log(startDate);
        console.log(endDate);
        console.log(startLocation);
        console.log(preferredCategories);
  };



  return(
    <KeyboardAvoidingView 
      style={{ flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : "height"}
      keyboardShouldPersistTaps='always'
    >
      <ImageBackground source={require('./../../../assets/login-register.png')} style={styles.container}>
      <Text style={styles.plannerText}>Trip Planner</Text>
      <ProgressSteps
        completedProgressBarColor = {PRIMARY}
        completedStepIconColor = {PRIMARY}
        activeStepIconBorderColor = {PRIMARY}
        labelColor = {GREY}
        activeLabelColor = {PRIMARY}
        keyboardShouldPersistTaps='always'
        
      >
          <ProgressStep
            scrollViewProps = {{
              keyboardShouldPersistTaps: 'always'
            }}
            nextBtnStyle = {styles.button}
            nextBtnTextStyle = {styles.buttonText}
            keyboardShouldPersistTaps='always'
            onNext = {() => {
              console.log(travelMode);
              console.log(startDate);
              console.log(endDate);

            }}
          >
            <FirstStep 
                states = {{
                  startDate,
                  endDate,
                  travelMode
                }}
                setters = {{
                  setStartDate,
                  setEndDate,
                  setTravelMode
                }}
                travelModes = {travelModes}
            />
          </ProgressStep>
          <ProgressStep
            scrollViewProps = {{
              keyboardShouldPersistTaps: 'handled'
            }}
            onNext = {() => {
              console.log(travelMode);
              console.log(startDate);
              console.log(endDate);
              console.log(startLocation);

            }}
            
            nextBtnStyle = {styles.button}
            nextBtnTextStyle = {styles.buttonText}
            previousBtnStyle = {styles.button}
            previousBtnTextStyle = {styles.buttonText}
          >
              <SecondStep
                  setStartLocation = { (location) => setStartLocation(location) }
                  startLocation = {startLocation}
              />
          </ProgressStep>
          <ProgressStep
            finishBtnText = "Generate"
            nextBtnStyle = {styles.button}
            nextBtnTextStyle = {styles.buttonText}
            previousBtnStyle = {styles.button}
            previousBtnTextStyle = {styles.buttonText}
            onSubmit = {handleGenerate}
          
          >
            <ThirdStep
                setPreferredCategories = {setPrefferedCategories}
            />
          </ProgressStep>
      </ProgressSteps>
    </ImageBackground>


    </KeyboardAvoidingView>
    
  );
}

export default TripPlannerFirst;

const styles = StyleSheet.create({
  button: {
    backgroundColor: PRIMARY,
    borderRadius: 10,
    color: WHITE,
    width: 100,
    alignItems: 'center'
  },
  buttonText: {
    color: WHITE
  },
  container: {
    height: Dimensions.get('screen').height,
    paddingTop: Dimensions.get('screen').height * 0.02,
    flex: 1
  },
  plannerText: {
    fontWeight: 'bold',
    alignSelf: "center",
    fontSize: 30,
    marginBottom: Dimensions.get('screen').height * 0.02
  },
})