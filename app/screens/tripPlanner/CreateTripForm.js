import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '@ui-kitten/components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { BLACK, GREY, PRIMARY, WHITE } from '../../theme/colors';
import { createTrip, getTripCreatedStatus, getTripCreatingError, getTripCreatingStatus } from '../../store/entities/users';
import Spinner from '../../components/common/Spinner';
import AnimatedSuccess from '../../components/common/AnimatedSuccess';
import { getAuth } from '../../store/auth';
import { changeCreatedTripStatus } from '../../store/entities/users';
import { NAVIGATION } from '../../constants';

const CreateTripForm = ({ route }) => {
    const dispatch = useDispatch(); 
    const navigator = useNavigation();

    const { trip } = route.params;

    const tripCreating = useSelector(getTripCreatingStatus);
    const tripCreatingError = useSelector(getTripCreatingError);
    const tripCreatedStatus = useSelector(getTripCreatedStatus);

    const auth = useSelector(getAuth);

    const formik = {
        initialValues: {
          name: ""
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .required("Required field")
        })
      };
    return(
        <>
            {!tripCreatedStatus ? <ImageBackground source = {require('./../../../assets/login-register.png')} style = {styles.container}>
                <Formik
                    initialValues = {formik.initialValues}
                    validationSchema = {formik.validationSchema}
                    onSubmit = {({ name }) => {
                            dispatch(createTrip({name, ...trip}, auth )); 
                    }}
                >
                    {({handleChange, handleSubmit, errors, values }) => (
                        <View style = {styles.formBox}>
                            <Text style={styles.createTripText}>Create Trip</Text>
                            <Input
                                textContentType='name'
                                size='large'
                                textStyle={{ color: BLACK, height: 40 }}
                                value={values.name}
                                label={evaProps => <Text {...evaProps} style={styles.inputLabel}>Trip Name</Text>}
                                placeholder='Enter trip name...'
                                onChangeText={handleChange('name')}
                                style={styles.input}
                            />
                            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
                            <Button
                                size='small'
                                disabled = {tripCreating}
                                onPress={handleSubmit}
                                title='submit'
                                style={styles.button}>
                                {(evaProps) => <Text evaProps style={styles.buttonText}>{tripCreating ? <Spinner color = {WHITE}/> : "Create Trip"}</Text>}
                            </Button>
                            {tripCreatingError && <Text>Error</Text>}
                        </View>
                    )
                    }
                </Formik>
            </ImageBackground> : <AnimatedSuccess cleanUpAction = {() => dispatch(changeCreatedTripStatus(false))} navigate = {() => navigator.navigate(NAVIGATION.myTrips)} />}
        </>
    )
};

export default CreateTripForm;

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        marginTop: Dimensions.get('screen').height * 0.04
    },
    buttonText: {
        color: WHITE,
        fontSize: 30
    },
    container: {
        flex: 1
    },  
    createTripText: {
        fontWeight: 'bold',
        fontSize: 30
    },
    error: {
        fontSize: 15,
        color: 'red',
        marginLeft: 10
    },
    formBox: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: Dimensions.get('screen').height * 0.04
    },
    input: {
        marginTop: Dimensions.get('screen').height * 0.04,
        backgroundColor: GREY,
        borderRadius: 50,
    },
    inputLabel: {
        fontSize: 20,
        marginBottom: 10,
        color: PRIMARY
    }
});


