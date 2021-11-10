import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Card, Button } from '@ui-kitten/components';
import { BLACK, GREY, PRIMARY } from '../../theme/colors';


const Header = (props) => (
    <View {...props} style = {{alignItems: "center"}}>
      <Text style = {styles.title} category='h6'>{props.title}</Text>
    </View>
);

const Footer = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
      <Button
        onPress = {props.onViewMorePress}
        style={styles.footerControl}
        size='small'>
        View More
      </Button>
    </View>
);

const Trip = ({ trip, onViewMorePress }) => {
    return(
        <View style = {styles.container}>
            <Card style={styles.card} header={() => <Header title = {trip.title}/>} footer={() => <Footer onViewMorePress = {onViewMorePress}/>}>    
                <Text style = {styles.property}>Start Date: </Text><Text>{trip.startDate}</Text>
                <Text style = {styles.property}>End Date: </Text><Text>{trip.endDate}</Text>
                <Text style = {styles.property}>Destinations: </Text>
                <Text>{trip.destinations.map((d,i) =><Text style = {styles.destination} key = {d}>{d}{i < trip.destinations.length - 1 && ", "}</Text>)}</Text>
            </Card>  
        </View>
    )
};


export default Trip;

const styles = StyleSheet.create({
    card: {
        height: Dimensions.get("window").height * 0.4,
        width: "100%",
        borderRadius: 15,
        padding: 5
    },
    container: {
        width: "95%",
        backgroundColor: PRIMARY,
        alignItems: 'center',
        padding: 1,
        borderRadius: 15,
        marginVertical: 10,
        elevation: 5
    },
    destination: {
        
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: "flex-end"
      },
    footerControl: {
        marginHorizontal: 2,
    },
    title: {
        fontSize: 18,
        color: PRIMARY,
        fontWeight: 'bold'
    },
    property: {
        marginVertical: 10,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: PRIMARY

    }
})