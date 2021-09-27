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
import { useSelector } from 'react-redux';
import { getCategories } from '../../store/entities/categories';
import Spinner from '../../components/common/Spinner';
import { useFirestoreConnect } from 'react-redux-firebase';
import { collections } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '../../constants';


const CategoryCorousel = () => {
    const navigator = useNavigation()
    useFirestoreConnect([
        collections.categories.name
    ])

    const categories = useSelector(getCategories);

   
    return (<View style={styles.container}>
        <Text style={styles.title}>Categories</Text>
        <ScrollView
            horizontal
            style={styles.scrollViewContainer}
            showsHorizontalScrollIndicator={false}
        >
            {categories ? categories.map((c) => {
                return (<TouchableOpacity
                    key={c.id}
                    style={{ marginHorizontal: 10 }}
                    onPress = {() => navigator.navigate(NAVIGATION.category.navigator,{screen: NAVIGATION.category.screen , params:c} )}
                >
                    <ImageBackground
                        style={styles.scrollImage}
                        source={{uri: c.url}}
                        imageStyle={styles.image}
                    >
                        <Text style={styles.imageLabel}>{c.title}</Text>


                    </ImageBackground>
                </TouchableOpacity>)
            }): <Spinner/>}
        </ScrollView>
    </View>);
}

export default CategoryCorousel;


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