import * as React from 'react';
import { useWindowDimensions, StyleSheet, Text,View,ScrollView, Image, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useFirestoreConnect } from 'react-redux-firebase';
import { BLACK, DARKGREY, GREY, PRIMARY, WHITE } from '../../theme/colors';
import { collections } from "../../firebase";
import Read from './Read';
import Unread from './Unread';
import { useSelector } from 'react-redux';
import { getAuth} from "../../store/auth";


const Notifications = () => {
  const layout = useWindowDimensions();
  const auth = useSelector(getAuth);

  useFirestoreConnect([
      {
          collection: collections.users.name,
          doc: auth.uid,
          subcollections: [{
              collection: collections.users.notifications.name
          }],
          storeAs: 'notifications'
      }
  ]);


  const renderScene = SceneMap({
    read: Read,
    unread: Unread,
  });


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
      { key: 'unread', title: 'Unread'},
      { key: 'read', title: 'Read'},
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

export default Notifications;


const styles = StyleSheet.create({
    indicator: {
        backgroundColor: GREY,
    },
    tabBar: {
        backgroundColor: PRIMARY
    },

});