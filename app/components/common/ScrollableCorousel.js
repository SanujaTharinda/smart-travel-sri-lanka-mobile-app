import React from 'react';
import {
    Text,
    View,
    ScrollView,
    ImageBackground,
    StyleSheet,
    Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BLACK, PRIMARY, WHITE } from './../../theme/colors';
import { NAVIGATION as nav } from '../../constants';
import { useNavigation } from '@react-navigation/native';


const ScrollableCorousel = ({
    title,
    elements,
    destination
}) => {
    const navigation = useNavigation();
    console.log(destination);
    return (<View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <ScrollView
            horizontal
            style={styles.scrollViewContainer}
            showsHorizontalScrollIndicator={false}
        >
            {elements.map((e) => {
                return (<TouchableOpacity
                    key={e.id}
                    style={{ marginHorizontal: 10 }}
                    onPress={() => navigation.navigate(destination, e)}
                >
                    <ImageBackground
                        style={styles.scrollImage}
                        source={e.source}
                        imageStyle={styles.image}
                    >
                        <Text style={styles.imageLabel}>{e.title}</Text>


                    </ImageBackground>
                </TouchableOpacity>)
            })}
        </ScrollView>
    </View>);
}

export default ScrollableCorousel;


const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height * 0.4,
        marginBottom: 30,
        padding: 0
    },
    image: {
        borderRadius: 30,
    },
    imageLabel: {
        color: WHITE,
        fontSize: 20,
        fontWeight: 'bold',
        elevation: 50
    },
    scrollViewContainer: {
        marginTop: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    scrollImage: {
        width: Dimensions.get('screen').width * 0.7,
        height: "100%",
        paddingTop: 20,
        paddingLeft: 20
    },
});