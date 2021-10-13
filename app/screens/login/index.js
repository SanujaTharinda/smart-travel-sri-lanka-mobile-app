import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    ImageBackground,
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import { Button, Input, Icon } from '@ui-kitten/components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {  signIn, getUserLoggingInStatus, getAuthError } from '../../store/auth';
import Spinner from './../../components/common/Spinner';
import Logo from '../../components/common/Logo';
import { GREY, PRIMARY, WHITE, BLACK } from '../../theme/colors';
import { NAVIGATION } from '../../constants';


const Login = ({ navigation }) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const dispatch = useDispatch();
    const logging = useSelector(getUserLoggingInStatus);
    const authError = useSelector(getAuthError);

    const formik = {
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Required field"),
            password: Yup.string()
                .min(6, "Password must contain more than 6 characters")
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, "Password must contain minimum six characters, at least one letter, one number and one special character")
                .required("Required field"),
        }),
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    return (
        <ImageBackground source={require('./../../../assets/login-register.png')} style={styles.container}>
                <Logo/>
                <Formik
                    initialValues={formik.initialValues}
                    validationSchema={formik.validationSchema}
                    onSubmit={({ email, password }) => dispatch(signIn(email,password))}
                >
                    {({ handleChange, handleSubmit, values, errors }) => (
                        <View style={styles.loginBox}>
                            <Text style={styles.loginText}>Login</Text>
                            <Input
                                textContentType='emailAddress'
                                size='large'
                                textStyle={{ color: BLACK, height: 40 }}
                                value={values.email}
                                label={evaProps => <Text {...evaProps} style={styles.inputLabel}>Email</Text>}
                                placeholder='Enter your email...'
                                onChangeText={handleChange('email')}
                                style={styles.input}
                            />
                            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                            <Input
                                textContentType='password'
                                size='large'
                                textStyle={{ color: BLACK, height: 40 }}
                                value={values.password}
                                label={evaProps => <Text {...evaProps} style={styles.inputLabel}>Password</Text>}
                                placeholder='Enter your password...'
                                accessoryRight={renderIcon}
                                secureTextEntry={secureTextEntry}
                                onChangeText={handleChange('password')}
                                style={styles.input}
                            />
                            {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                            <View style={styles.row}>
                               
                                <Text style={styles.link}>Forgot Password?</Text>
                            </View>
                            <Button
                                size='small'
                                onPress={handleSubmit}
                                title='submit'
                                style={styles.button}>
                                {(evaProps) => <Text evaProps style={styles.buttonText}>{logging ?  <Spinner color = {WHITE}/> : 'Login'}</Text>}
                            </Button>
                            {authError && <Text>{authError}</Text>}
                            <View style={styles.row}>
                                <Text style={styles.account}>Don't Have An Account? </Text>
                                <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION.register.navigator)}>
                                    <Text style={styles.register}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View>)}
                </Formik>
        </ImageBackground>
    );
}

export default Login;

const styles = StyleSheet.create({
    account: {
        color: BLACK,
        fontWeight: 'bold'
    },
    button: {
        borderRadius: 30,
        marginTop: Dimensions.get('screen').height * 0.04
    },
    buttonText: {
        color: WHITE,
        fontSize: 30
    },
    captionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    captionIcon: {
        width: 10,
        height: 10,
        marginRight: 5
    },
    captionText: {
        fontSize: 12,
        fontWeight: "400",
        color: "#8F9BB3",
    },
    container: {
        height: Dimensions.get('screen').height,
        paddingTop: Dimensions.get('screen').height * 0.07
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
    },
    inputLabel: {
        fontSize: 20,
        marginBottom: 10,
        color: PRIMARY
    },
    link: {
        color: PRIMARY,
        fontSize: 18
    },
    loginBox: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: Dimensions.get('screen').height * 0.04
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: 30
    },
    register: {
        color: WHITE,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    rememberMe: {
        fontSize: 18
    },
    row: {
        paddingLeft: 6,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10
    }

})