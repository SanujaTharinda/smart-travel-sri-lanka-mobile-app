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


const ScrollableCorousel = ({
    title,
    images
}) => {
    console.log(images);
    return (<View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <ScrollView
            horizontal
            style={styles.scrollViewContainer}
            showsHorizontalScrollIndicator={false}
        >
            {images.map((i) => {
                return (<TouchableOpacity key={i.id} style={{ marginHorizontal: 10 }}>
                    <ImageBackground
                        style={styles.scrollImage}
                        source={i.source}
                        imageStyle={styles.image}
                    ></ImageBackground>
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
        shadowOpacity: 0.26
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
    },
});