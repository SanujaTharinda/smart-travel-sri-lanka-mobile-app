import * as React from 'react';
import { useWindowDimensions, StyleSheet, Text,View,ScrollView, Image, Dimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { BLACK, DARKGREY, GREY, PRIMARY, WHITE } from '../../theme/colors';
import Completed from './Completed';
import InFuture from './InFuture';
import Ongoing from './Ongoing';
import { useFirestoreConnect } from 'react-redux-firebase';
import { collections } from './../../firebase';
import { useSelector } from 'react-redux';
import { getAuth } from './../../store/auth';

const MyTrips = () => {
  const auth = useSelector(getAuth);
  // const [ visible, setVisible ] = React.useState(false);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     setVisible(true);

  //     return () => setVisible(false);
  //   }, [])
  // );
  useFirestoreConnect([
    {
        collection: collections.users.name,
        doc: auth.uid,
        subcollections: [{
            collection: collections.users.trips.name
        }],
        storeAs: 'trips'
    }
  ]);
  

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