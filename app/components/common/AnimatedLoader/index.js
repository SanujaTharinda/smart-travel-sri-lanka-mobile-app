import React from 'react';
import { Text, StyleSheet } from 'react-native'
import AnimatedLoader from "react-native-animated-loader";

const MyAnimatedLoader = () => {
    return(
        <AnimatedLoader
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("./worldLoading.json")}
            animationStyle={styles.lottie}
            speed={1}
        >
            <Text style = {styles.text}>Generating plan.Please wait...</Text>
        </AnimatedLoader>
    );


};

export default React.memo(MyAnimatedLoader);

const styles = StyleSheet.create({
    lottie: {
      width: 300,
      height: 300
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});