import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const Activities = () => (
  <View style={{ flex: 1, backgroundColor: 'fff' }} />
);

const renderScene = SceneMap({
  basicInfo: FirstRoute,
  activities: Activities,
  gallery : SecondRoute,
});

const destination = ({ route }) => {
  const layout = useWindowDimensions();
  console.log("Destination",route.params)

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'basicInfo', title: 'Basic Info'},
    { key: 'activities', title: 'Activities'},
    { key: 'gallery', title: 'Gallery' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

export default destination;