import React, { useEffect } from 'react';
import { StyleSheet,View, Dimensions } from 'react-native';
import { Button, Input, Text } from '@ui-kitten/components';
import Spinner from "./../../components/common/Spinner";
import { BLACK, GREY, PRIMARY, WHITE } from '../../theme/colors';
import { Formik } from 'formik';
import * as Yup from "yup";


const EditProfileForm = ({ onUnmount, onCancelPress, onEditPress, profile, loading, message, messageColor }) => {


    useEffect(()=> {
        return () => onUnmount();
    },[]);  

    return(
        <View style = {styles.container}>
            <Formik
                initialValues = {{
                    firstName: profile.firstName,
                    lastName: profile.lastName
                }}
                validationSchema = {Yup.object({
                    firstName: Yup.string().required("This Field is required"),
                    lastName: Yup.string().required("This Field is required")
                })}
                onSubmit = {(values) => {
                    onEditPress(values)
                }}
            >
                {({handleChange, handleSubmit, values, errors}) => (
                    <>
                        <View>
                            <View style = {styles.titleContainer}>
                                <Text style = {styles.title}>Edit Profile</Text>
                            </View>
                            <Input
                                size='large'
                                textStyle={{ color: BLACK, height: 40 }}
                                value={values.firstName}
                                label={evaProps => <Text {...evaProps} style={styles.inputLabel}>First Name</Text>}
                                placeholder='Enter your first name...'
                                onChangeText={handleChange('firstName')}
                                style={styles.input}
                            />
                            {errors.firstName && <Text style={styles.error}>{errors.firstName}</Text>}
                            <Input
                                size='large'
                                textStyle={{ color: BLACK, height: 40 }}
                                value={values.lastName}
                                label={evaProps => <Text {...evaProps} style={styles.inputLabel}>Last Name</Text>}
                                placeholder='Enter your last name...'
                                onChangeText={handleChange('lastName')}
                                style={styles.input}
                            />
                            {errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}
                        </View>
                        <View style = {styles.buttonsContainer}>
                            <Button onPress={onCancelPress} style = {styles.button}>
                                Cancel
                            </Button>
                            <Button disabled = {loading} onPress={handleSubmit} style = {styles.button}>
                                {loading ? <Spinner color = {WHITE}/> : "Edit"}
                            </Button>
                        </View>
                        {message && <Text style = {[styles.message, {color: messageColor}]}>{message}</Text>}
                    </>
                )}
            </Formik>
        </View>
    );
};

export default EditProfileForm;

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 5
    },
    buttonsContainer: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: 'flex-end',
        width: "100%",
        
    },  
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: GREY,
        opacity: 0.98,
        alignItems: "center",
        borderRadius: 30,
        padding: 15,
        height: Dimensions.get("window").height * 0.6
    },
    error: {
        fontSize: 15,
        color: 'red',
        marginLeft: 10
    },
    input: {
        marginTop: Dimensions.get('screen').height * 0.04,
        backgroundColor: GREY,
        borderRadius: 50,
        width: "95%"
    },
    inputLabel: {
        fontSize: 20,
        marginBottom: 10,
        color: PRIMARY
    },
    message: {
        color: PRIMARY,
        marginTop: 4
    },
    title: {
        fontSize: 25,
        color: BLACK,
        fontWeight: "bold"
    },
    titleContainer: {
        alignItems: "center"
    }
});