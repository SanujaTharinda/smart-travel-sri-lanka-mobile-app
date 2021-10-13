import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import { Button,Input,Icon, Spinner } from '@ui-kitten/components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../../components/common/Error';
import { getUserRegisteringStatus, register } from '../../store/entities/users';
import { GREY, PRIMARY, WHITE, BLACK } from './../../theme/colors';
import Logo from '../../components/common/Logo';


const RegisterSecond = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const registering = useSelector(getUserRegisteringStatus);


  const formik = {
    initialValues: {
      password: "",
      repeatPassword: ""
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password must contain more than 6 characters")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, "Password must contain minimum six characters, at least one letter, one number and one special character")
        .required("Required field"),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Password must be the same!')
        .required('Required!'),
    })
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
            onSubmit={(values) => {
              const credentials = { email: route.params.email, password: values.password };
              const profile = { 
                firstName: route.params.firstName, 
                lastName: route.params.lastName,
                enabled: true,
                userRole: {
                  admin: false,
                  traveller: true
                }
              };

              dispatch(register(credentials, profile));
            }}
          >
            {({ handleChange, handleSubmit, values, errors }) => (<View style={styles.registerBox}>
              <Text style={styles.registerText}>Register</Text>
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
              {errors.password && <Error error={errors.password} />}
              <Input
                textContentType='repeatPassword'
                size='large'
                textStyle={{ color: BLACK, height: 40 }}
                value={values.repeatPassword}
                label={evaProps => <Text {...evaProps} style={styles.inputLabel}>Re enter password</Text>}
                placeholder='Repeat your password...'
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={handleChange('repeatPassword')}
                style={styles.input}
              />
              {errors.repeatPassword && <Error error={errors.repeatPassword} />}
              <Button
                size='small'
                onPress={handleSubmit}
                style={styles.button}>
                {(evaPro) => <Text evaProps style={styles.buttonText}>{registering ? <Spinner status = 'basic'/> : 'Register'}</Text>}
              </Button>
            </View>)}
          </Formik>
    </ImageBackground>
  );
}

export default RegisterSecond;

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
  container: {
    height: Dimensions.get('screen').height,
    paddingTop: Dimensions.get('screen').height * 0.07
  },
  input: {
    marginBottom: Dimensions.get('screen').height * 0.02,
    backgroundColor: GREY,
    borderRadius: 50,
  },
  inputLabel: {
    fontSize: 20,
    marginBottom: Dimensions.get('screen').height * 0.02,
    color: PRIMARY
  },
  link: {
    color: PRIMARY,
    fontSize: 18
  },
  registerBox: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 35
  },
  registerText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: Dimensions.get('screen').height * 0.03
  },
  login: {
    color: BLACK,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },

  row: {
    paddingLeft: 6,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10
  }

})