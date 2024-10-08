import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Button, Input} from '@ui-kitten/components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../../components/common/Error';
import Logo from '../../components/common/Logo';
import { GREY, PRIMARY, WHITE, BLACK } from './../../theme/colors';
import { NAVIGATION } from './../../constants';


const RegisterFirst = () => {
  const navigation = useNavigation();

  const formik = {
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required field"),
      lastName: Yup.string()
        .required("Required field"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required field")
    })
  };

  return (
    <ImageBackground source={require('./../../../assets/login-register.png')} style={styles.container}>
          <Logo/>
          <Formik
            initialValues={formik.initialValues}
            validationSchema={formik.validationSchema}
            onSubmit={(values) => {
              navigation.navigate(NAVIGATION.register.second, values)
            }}

          >
            {({ handleChange, handleSubmit, values, errors }) => (<View style={styles.registerBox}>
              <Text style={styles.registerText}>Register</Text>
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
              {errors.email && <Error error={errors.email} />}
              <Input
                textContentType='name'
                size='large'
                textStyle={{ color: BLACK, height: 40 }}
                value={values.firstName}
                label={evaProps => <Text {...evaProps} style={styles.inputLabel}>First Name</Text>}
                placeholder='Enter your first name...'
                onChangeText={handleChange('firstName')}
                style={styles.input}
              />
              {errors.firstName && <Error error={errors.firstName} />}
              <Input
                textContentType='name'
                size='large'
                textStyle={{ color: BLACK, height: 40 }}
                value={values.lastName}
                label={evaProps => <Text {...evaProps} style={styles.inputLabel}>Last Name</Text>}
                placeholder='Enter your last name...'
                onChangeText={handleChange('lastName')}
                style={styles.input}
              />
              {errors.lastName && <Error error={errors.lastName} />}
              <Button
                size='small'
                onPress={handleSubmit}
                style={styles.button}>
                {(evaPro) => <Text evaProps style={styles.buttonText}>Next</Text>}
              </Button>
              <View style={styles.row}>
                <Text style={styles.account}>Already Have An Account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION.login)}>
                  <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>)}
          </Formik>
    </ImageBackground>
  );
}

export default RegisterFirst;

const styles = StyleSheet.create({
  account: {
    color: BLACK,
    fontWeight: 'bold'
  },
  button: {
    borderRadius: 30,
    marginTop: Dimensions.get('screen').height * 0.02
  },
  buttonText: {
    color: WHITE,
    fontSize: 30
  },
  container: {
    height: Dimensions.get('screen').height,
    paddingTop: Dimensions.get('screen').height * 0.07,
  },
  input: {
    marginTop: Dimensions.get('screen').height * 0.01,
    backgroundColor: GREY,
    borderRadius: 50,
  },
  inputLabel: {
    fontSize: 20,
    marginBottom: Dimensions.get('screen').height * 0.005,
    color: PRIMARY
  },
  link: {
    color: PRIMARY,
    fontSize: 18
  },
  registerBox: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: Dimensions.get('screen').height * 0.01
  },
  registerText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: Dimensions.get('screen').height * 0.02
  },
  login: {
    color: WHITE,
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