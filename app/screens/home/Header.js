import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { FastImage } from 'react-native-fast-image';
import { BLACK, PRIMARY, WHITE } from './../../theme/colors';


const Header = ({images}) => {
    return ( 
            <View style={styles.homeHeader}>
                <SliderBox
                    sliderBoxHeight={'100%'}
                    images={images}
                    autoplay
                    circleLoop
                    autoplayInterval={6000}
                    imageLoadingColor={PRIMARY}
                    ImageComponent={FastImage}
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