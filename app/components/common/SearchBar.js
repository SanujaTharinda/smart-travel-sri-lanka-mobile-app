import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Icon } from '@ui-kitten/components';
import { PRIMARY, WHITE, GREY } from './../../theme/colors';

const SearchIcon = (style) => (
  <Icon {...style} fill={WHITE} name='search' />
);

export default () => (
  <Input
    style={styles.search}
    size='large'
    placeholderTextColor={GREY}
    placeholder='Search... Ex: Seegiriya'
    accessoryLeft={SearchIcon}
    textStyle={{ color: WHITE }}
  />
);


const styles = StyleSheet.create({
  search: {
    marginTop: 20,
    backgroundColor: PRIMARY,
    borderRadius: 30,
  }
});