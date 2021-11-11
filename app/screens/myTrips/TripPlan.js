import React, { useState, } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from '@ui-kitten/components';
import TripMap from './TripMap';
import TripLocation from './TripLocation';
import { BLACK, WHITE } from '../../theme/colors';
import CheckList from './CheckList';

const TripPlan = ({ plan, onGoBackPress}) => {
    const [ checkListView, setCheckListView ] = useState(false);

    return(
        <ScrollView style = {styles.container} contentContainerStyle = {styles.contentContainer}>
            {checkListView ? <CheckList tripID = {plan.id} onBackPress = {() =>setCheckListView(false)}/> : 
                <>
                    <View style = {styles.titleContainer}>
                        <Text style = {styles.title}>Your Plan</Text>
                    </View>
                    <TripMap
                        start = {plan.startLocation}
                        destinations = {plan.tripDestinations}  
                    />
                    <View style = {styles.locationsContainer}>
                        {plan.tripDestinations.map((d, i) => <TripLocation key = {i} location = {d}/>)}
                    </View>
                
                    <View style = {styles.buttonsContainer}>
                        <Button
                            onPress = {() => setCheckListView(true)}
                            size='small'
                            style={styles.button}>
                                {(evaProps) => <Text {...evaProps} style={styles.buttonText}>View Checklist</Text>}
                        </Button>
                        <Button
                            onPress = {onGoBackPress}
                            size='small'
                            style={styles.button}>
                                {(evaProps) => <Text {...evaProps} style={styles.buttonText}>Back To Trips</Text>}
                        </Button>
                    </View>
                </>  
            }
        </ScrollView>);
};


export default React.memo(TripPlan);

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        marginVertical: 10,
        elevation: 3,
        width: "90%"
    },
    buttonText: {
        color: WHITE,
        fontSize: 25
    }, 
    buttonsContainer: {
        alignItems: "center",
        flex: 1,
        height: "100%",
        marginBottom: 20
    },
    container: {
        flex: 1,
        backgroundColor: WHITE   
    },
    contentContainer: {
        backgroundColor: WHITE,
        paddingTop: 18,
    },
    locationsContainer: {
        paddingLeft: 20,
    },
    title: {
        color: BLACK,
        fontWeight: "bold",
        fontSize: 25
    },
    titleContainer: {
        alignItems: "center",
        flex: 1
    }
})