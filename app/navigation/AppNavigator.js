import React from "react";
import { Image, Dimensions, StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Login } from '../screens'
import { Home } from './../screens';
import { NAVIGATION } from '../constants'
import RegisterNavigator from "./RegisterNavigator";
import { SliderBox } from 'react-native-image-slider-box';
import { FastImage } from 'react-native-fast-image';
import { BLACK, PRIMARY, WHITE } from './../theme/colors';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    const images = [
        require('../../assets/home/1.jpg'),
        require('../../assets/home/2.jpg'),
        require('../../assets/home/3.jpg'),
        require('../../assets/home/4.jpg'),
        require('../../assets/home/5.jpg')
    ]

    return (
        <Drawer.Navigator>
            <Drawer.Screen
                options={{
                    headerBackground: () =>
                        <View style={styles.homeHeaderBackground}>
                            <SliderBox
                                sliderBoxHeight={'100%'}
                                images={images}
                                autoplay
                                circleLoop
                                autoplayInterval={6000}
                                imageLoadingColor={PRIMARY}
                                ImageComponent={FastImage}
                            />
                        </View>,
                    headerTintColor: BLACK,
                    headerTitle: "Smart Travel Sri Lanka",
                    headerTitleContainerStyle: {
                        justifyContent: 'flex-start',
                        marginLeft: 0
                    },
                    headerStyle: {
                        height: Dimensions.get('window').height * 0.35
                    },
                    headerLeftContainerStyle: {
                        justifyContent: 'flex-start',
                    },


                }}
                name={NAVIGATION.home}
                component={Home} />
            <Drawer.Screen options={{ headerShown: false }} name={NAVIGATION.login} component={Login} />
            <Drawer.Screen options={{ headerShown: false }} name={NAVIGATION.register.common} component={RegisterNavigator} />
        </Drawer.Navigator>
    );
}

export default AppNavigator;


const styles = StyleSheet.create({
    homeHeaderBackground: {
        width: '100%',
        height: "100%",
        opacity: 0.8
    }
});