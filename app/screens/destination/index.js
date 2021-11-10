import * as React from 'react';
import { useWindowDimensions, StyleSheet, Text,View,ScrollView, Image, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import BasicInfo from './BasicInfo';
import Activities from './Activities';
import Gallery from './Gallery';
import { BLACK, DARKGREY, GREY, PRIMARY, WHITE } from '../../theme/colors';
import Spinner from '../../components/common/Spinner';


const Destination = ({ route }) => {
  const layout = useWindowDimensions();
  const { destination } = route.params;
  const renderScene = SceneMap({
    basicInfo: () => <BasicInfo destination = {destination}/>,
    activities: () => <Activities destination = {destination}/>,
    gallery : () => <Gallery destination = {destination}/>,
  });


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'basicInfo', title: 'Basic Info'},
    { key: 'activities', title: 'Activities'},
    { key: 'gallery', title: 'Gallery' },
  ]);

  return (<>
        
        {destination ?     
          <>
            <TabView
              style = {{minHeight: "100%", flexGrow: 1}}
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{ width: layout.width }}
              renderTabBar = {props => <TabBar {...props} inactiveColor = {WHITE} activeColor = {BLACK} style = {styles.tabBar} indicatorStyle = {styles.indicator} />}
            />
          </>: <Spinner/>}

    </>
  );
}

export default Destination;


const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.35,
  },
  indicator: {
    backgroundColor: GREY,
  },
  tabBar: {
    backgroundColor: PRIMARY
  },
  title: {
    color: BLACK,
    fontSize: 20,
    fontWeight: 'bold'
  },
  titleContainer: {
    width: "100%",
    backgroundColor: GREY,
    alignItems: 'center',
    paddingVertical: 8
    
  }

});