import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { FastImage } from 'react-native-fast-image';
import { BLACK, PRIMARY, WHITE } from './../../theme/colors';
import { useFirestoreConnect } from 'react-redux-firebase';
import { collections } from '../../firebase';
import { useSelector } from 'react-redux';
import { getPopularDestinations } from '../../store/entities/destinations';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '../../constants';


const Header = ({images}) => {
    useFirestoreConnect([
        collections.destinations.name
    ]);
    const navigator = useNavigation();

    const destinations = useSelector(getPopularDestinations);

    return ( 
            <View style={styles.homeHeader}>
                <SliderBox
                    sliderBoxHeight={'100%'}
                    images={destinations.map(d => d.mainPhoto)}
                    autoplay
                    circleLoop
                    autoplayInterval={6000}
                    imageLoadingColor={PRIMARY}
                    ImageComponent={FastImage}
                    onCurrentImagePressed = {index => navigator.navigate(NAVIGATION.category.navigator, {screen: NAVIGATION.destination ,params: {destination: destinations[index]}})}
                />
            </View>
     );
}
 
export default Header;

const styles = StyleSheet.create({
    homeHeader: {
        width: '100%',
        height: Dimensions.get('screen').height * 0.4,
        paddingLeft: 0
    }
});