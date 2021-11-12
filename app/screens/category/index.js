import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Autocomplete, AutocompleteItem } from '@ui-kitten/components';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import DestinationCard from './destinationCard';
import { collections } from './../../firebase';
import { getPublishedDestinationsByCategory } from '../../store/entities/destinations';
import { FlatList } from 'react-native-gesture-handler';
import Seperator from '../../components/common/Seperator';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '../../constants';

const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());

const Category = ({ route }) => {
    const category = route.params;
    const navigator = useNavigation();
    useFirestoreConnect([
        collections.destinations.name
    ]);
    const destinations = useSelector(getPublishedDestinationsByCategory(category.title));

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
        <>
        <View style = {{marginBottom: 20, color: "red"}}>
            <Autocomplete
                status = "primary"
                style = {styles.autoComplete}
                placeholder='Enter Location To Search...'
                value={value}
                onSelect={onSelect}
                onChangeText={onChangeText}>
                {data.map(renderOption)}
                
            </Autocomplete>
        </View>
        <FlatList
            style = {styles.container}
            data = {destinations}
            keyExtractor = {d => d.id}
            renderItem = {({ item }) => <DestinationCard destination = {item}/>}
            ItemSeparatorComponent = {Seperator}
        />
       </>
    );
}

export default Category;

const styles = StyleSheet.create({
    autoComplete: {
        marginBottom: 40
    },
    container: {
        marginTop: 20
    },
    
})
