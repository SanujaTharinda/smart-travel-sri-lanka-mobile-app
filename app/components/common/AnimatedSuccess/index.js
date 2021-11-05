import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { WHITE } from '../../../theme/colors';




const AnimatedSuccess = ({ cleanUpAction, navigate }) => {
    
    useEffect(() => {
        setTimeout(() => navigate(), 1300);
        return () => {
          cleanUpAction();
        }
    }, []);

    return(
        <LottieView 
            source = {require('./success.json')} 
            autoPlay 
            style = {{
                backgroundColor: WHITE
            }}
        />
    )
};

export default AnimatedSuccess;