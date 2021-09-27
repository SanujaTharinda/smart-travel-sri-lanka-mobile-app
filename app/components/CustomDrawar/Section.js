import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { PRIMARY } from '../../theme/colors';
import Element from './Element';

const Section = ({title, elements }) => {

    return(
                <View style = {styles.container}>
                    <Text style = {styles.title}>{title}</Text>
                    {elements.map(e => 
                        <Element key = {e.name} text = {e.name} icon = {e.icon} destination = {e.destination}/>
                    )}
                                        
                </View>

    )

    
}

export default Section;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title: {
        color: PRIMARY,
        fontSize: 18,
        fontWeight: 'bold'
    }
});