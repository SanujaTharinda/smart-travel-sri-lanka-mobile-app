import * as React from 'react';
import { useWindowDimensions, StyleSheet, Text,View,ScrollView, Image, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { BLACK, DARKGREY, GREY, PRIMARY, WHITE } from '../../theme/colors';
import Read from './Read';
import Unread from './Unread';


const Destination = () => {
  const layout = useWindowDimensions();
  const renderScene = SceneMap({
    read: Read,
    unread: Unread,
  });


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'read', title: 'Read'},
    { key: 'unread', title: 'Unread'},
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

export default Destination;


const styles = StyleSheet.create({
    indicator: {
        backgroundColor: GREY,
    },
    tabBar: {
        backgroundColor: PRIMARY
    },

});