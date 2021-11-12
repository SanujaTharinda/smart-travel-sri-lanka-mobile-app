import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import AnimatedLoader from '../../components/common/AnimatedLoader';
import { getDestinations } from '../../firebase';
import { GREY, PRIMARY, WHITE } from '../../theme/colors';
import generateTravelPlan from '../../travelPlanGenerator';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import TripPlan from './TripPlan';
import { NAVIGATION } from '../../constants';
import { getCreatedTrip, setCreatedTrip } from '../../store/entities/users';
import moment from 'moment';

const travelModes = [
  "Driving",
  "Train",
  "Bus"
];

const TripPlannerFirst = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();

  const [ travelMode, setTravelMode ] = useState(travelModes[0]);
  const [ startDate, setStartDate ] = useState(new Date());
  const [ endDate, setEndDate ] = useState(new Date());
  const [ startLocation, setStartLocation ] = useState(null);
  const [ preferredCategories, setPrefferedCategories ] = useState([]);
  const [ generating, setGenerating ] = useState(false);
  const [ generated, setGenerated ] = useState(false);
  const [ generatedPlan, setGeneratedPlan ] = useState({});

  const createdTrip = useSelector(getCreatedTrip);


  const handleGenerate = async() => {
    
        try {
            setGenerating(true);
            const response = await getDestinations(preferredCategories);
            const destinations = JSON.parse(response.data);
            const planResponse = await generateTravelPlan({
              startLocation,
              startDate,
              endDate,
              travelMode,
              destinations
            });
            if(planResponse.success)setGeneratedPlan(planResponse.trip);
            dispatch(setCreatedTrip({...planResponse.trip, startDate: startDate.toDateString(), endDate: endDate.toDateString() , travelMode}));
            console.log("Created Trip", {...planResponse.trip, startDate: startDate.toDateString(), endDate: endDate.toDateString() , travelMode});
            setGenerating(false);      
        } catch (e) {
            setGenerating(false);
            console.log("Error occured", e);
        }
  };

  const handleCreateTripClick = () => {
        navigator.navigate(NAVIGATION.tripPlanner.createTrip);    
  };

  return(
    <>
      {!generating && !createdTrip  ? <KeyboardAvoidingView 
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
              nextBtnDisabled = {moment(endDate).diff(startDate, "days") < 0}
              scrollViewProps = {{
                keyboardShouldPersistTaps: 'always'
              }}
              nextBtnStyle = {styles.button}
              nextBtnTextStyle = {styles.buttonText}
              keyboardShouldPersistTaps='always'
              onNext = {() => {
                console.log("Start Date: ", startDate);
                console.log("End Date: ", endDate);
                console.log('Travel Mode: ', travelMode);
                

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
                  error = {moment(endDate).diff(startDate, "days") < 0 ? "End Date Can not be less than start date" : ""}
              />
            </ProgressStep>
            <ProgressStep
              scrollViewProps = {{
                keyboardShouldPersistTaps: 'handled'
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


      </KeyboardAvoidingView> : generating ? <AnimatedLoader/> : <TripPlan plan = {generatedPlan} onBackToPlannerPress = {() => dispatch(setCreatedTrip(null))} onCreateTripPress = {handleCreateTripClick}/>}
    </>
    
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