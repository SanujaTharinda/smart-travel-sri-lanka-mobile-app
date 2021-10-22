import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import Label from './Label';
import { DARKGREY } from '../../theme/colors';

const Selector = ({ label, options = [], initialIndex = 0, onChange }) => {

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(initialIndex));

  return (
    <Layout style={styles.container} level='1'>
      <Select
        size = {"large"}
        value = {() => <Text style = {styles.inputText}>{options[selectedIndex.row]}</Text>}
        label = {() => <Label text = {label}/>}
        selectedIndex={selectedIndex}
        onSelect={index => {
          setSelectedIndex(index);
          onChange(options[index.row])
        }}>
        {options.map(o => <SelectItem title={o} key = {o}/> )}
      </Select>
    </Layout>
  );
};

export default React.memo(Selector);

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  inputText: {
    color: DARKGREY,
    marginLeft: 8
  }
});
