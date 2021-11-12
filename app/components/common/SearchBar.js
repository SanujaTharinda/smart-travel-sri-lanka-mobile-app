import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Autocomplete, AutocompleteItem } from '@ui-kitten/components';
import { BLACK, PRIMARY } from '../../theme/colors';
import { useFirestoreConnect } from 'react-redux-firebase';
import { collections } from '../../firebase';
import { useSelector } from 'react-redux';
import { getPublishedDestinations } from '../../store/entities/destinations';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '../../constants';

const movies = [
  { title: 'Star Wars' },
  { title: 'Back to the Future' },
  { title: 'The Matrix' },
  { title: 'Inception' },
  { title: 'Interstellar' },
];

const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());

const SearchBar = () => {
  useFirestoreConnect([
    collections.destinations.name
  ]);

  const navigator = useNavigation();
  const destinations = useSelector(getPublishedDestinations); 

  const [value, setValue] = React.useState(null);
  const [data, setData] = React.useState(destinations);

  const onSelect = (index) => {
    setValue(data[index].title);
    navigator.navigate(NAVIGATION.destination, {destination: data[index]});
  };

  const onChangeText = (query) => {
    setValue(query);
    setData(destinations.filter(item => filter(item, query)));
  };

  const renderOption = (item, index) => (
    <AutocompleteItem
      key={index}
      title={item.title}
    />
  );

  return (
    <Autocomplete
      style = {styles.searchbar}
      placeholder='Enter Place To Search...'
      value={value}
      onSelect={onSelect}
      onChangeText={onChangeText}>
      {data.map(renderOption)}
    </Autocomplete>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: PRIMARY,
    borderRadius: 20,
    color: BLACK,
    marginVertical: 30,
  }
})