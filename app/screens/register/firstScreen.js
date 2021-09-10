import React, { useState } from 'react';
import {
  ImageBackground,
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Button, CheckBox, Input, useTheme } from '@ui-kitten/components';

import SvgUri from 'react-native-svg-uri';
import { GREY, DARKGREY, PRIMARY, WHITE, BLACK } from './../../theme/colors';


const RegisterFirst = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);

  return (
    <ImageBackground source={require('./../../../assets/login-register.png')} style={styles.container}>
      <View>
        <View style={styles.logoContainer}>
          <SvgUri
            width={Dimensions.get('window').width}
            style={styles.logo}
            source={require('./../../../assets/logo.svg')}
          />
          <View style={styles.registerBox}>
            <Text style={styles.registerText}>Register</Text>
            <Input
              textContentType='emailAddress'
              size='large'
              textStyle={{ color: BLACK, height: 40 }}
              // value={value}
              label={evaProps => <Text {...evaProps} style={styles.inputLabel}>Email</Text>}
              placeholder='Enter your email...'
              // caption={renderCaption}
              // accessoryRight={renderIcon}
              // secureTextEntry={secureTextEntry}
              // onChangeText={nextValue => setValue(nextValue)}
              style={styles.input}
            />
            <Input
              textContentType='name'
              size='large'
              textStyle={{ color: BLACK, height: 40 }}
              // value={value}
              label={evaProps => <Text {...evaProps} style={styles.inputLabel}>First Name</Text>}
              placeholder='Enter your email...'
              // caption={renderCaption}
              // accessoryRight={renderIcon}
              // secureTextEntry={secureTextEntry}
              // onChangeText={nextValue => setValue(nextValue)}
              style={styles.input}
            />
            <Input
              textContentType='name'
              size='large'
              textStyle={{ color: BLACK, height: 40 }}
              // value={value}
              label={evaProps => <Text {...evaProps} style={styles.inputLabel}>Last Name</Text>}
              placeholder='Enter your email...'
              // caption={renderCaption}
              // accessoryRight={renderIcon}
              // secureTextEntry={secureTextEntry}
              // onChangeText={nextValue => setValue(nextValue)}
              style={styles.input}
            />



            <Button
              size='small'
              onPress={() => console.log("Pressed")}
              style={styles.button}>
              {(evaPro) => <Text evaProps style={styles.buttonText}>Next</Text>}
            </Button>
            <View style={styles.row}>

              <Text style={styles.account}>Already Have An Account? </Text>
              <Text style={styles.login}>Login</Text>
            </View>
          </View>
        </View>

      </View>

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
    marginTop: 50
  },
  buttonText: {
    color: WHITE,
    fontSize: 30
  },
  container: {
    height: "100%"
  },
  input: {
    marginTop: 30,
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
  registerBox: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 35
  },
  registerText: {
    fontWeight: 'bold',
    fontSize: 30
  },
  logoContainer: {
    marginTop: 50
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