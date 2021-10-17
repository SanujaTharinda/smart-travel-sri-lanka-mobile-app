import * as React from 'react';
import { useWindowDimensions, StyleSheet, Text,View,ScrollView, Image, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { BLACK, DARKGREY, GREY, PRIMARY, WHITE } from '../../theme/colors';
import Completed from './Completed';
import InFuture from './InFuture';
import Ongoing from './Ongoing';


const MyTrips = () => {
  

  const layout = useWindowDimensions();
  const renderScene = SceneMap({
    ongoing: Ongoing,
    inFuture: InFuture,
    completed: Completed
  });


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'ongoing', title: 'Ongoing'},
    { key: 'inFuture', title: 'In Future'},
    { key: 'completed', title: 'Completed'},
  ]);

  return (
        <TabView
            style = {{minHeight: "100%", flexGrow: 1}}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar = {props => <TabBar {...props} inactiveColor = {WHITE} activeColor = {BLACK} style = {styles.tabBar} indicatorStyle = {styles.indicator} />}
        />
    


  );
}

export default MyTrips;


const styles = StyleSheet.create({
    indicator: {
        backgroundColor: GREY,
    },
    tabBar: {
        backgroundColor: PRIMARY
    },

});