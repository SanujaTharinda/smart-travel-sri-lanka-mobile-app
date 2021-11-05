import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { CheckBox } from '@ui-kitten/components';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { collections } from '../../firebase';
import { getCategories } from '../../store/entities/categories';
import { BLACK, GREY, PRIMARY, WHITE } from '../../theme/colors';


const ThirdStep = ({ setPreferredCategories }) => {
    
    useFirestoreConnect([
      collections.categories.name
    ]);

    const categories = useSelector(getCategories);
    const [ checkedCategories, setCheckedCategories ] = useState([false * categories.length]);
  
    useEffect(() => {
      const selected = checkedCategories.map((c, index) => c && categories[index].title);
      setPreferredCategories(selected.filter(s => s));
    }, [checkedCategories])

    return(
        <View style={styles.plannerBox}>
          <Text style = {styles.title}>Prefered Destination Categories</Text>
            {categories.map((c,index) => 
                 <CheckBox
                      key = {index}
                      children = {() => <Text style = {styles.checkboxText}>{c.title}</Text>}
                    	style = {styles.checkbox}
                      checked = {checkedCategories[index]}
                      onChange={nextChecked => {
                        const newCategories = [...checkedCategories];
                        newCategories.splice(index, 1, nextChecked);  
                        setCheckedCategories(newCategories);
                      }}
                />
                )}
          
        </View>
    );
};


export default React.memo(ThirdStep);

const styles = StyleSheet.create({
    checkbox: {
      marginVertical: 5,
      alignSelf: 'flex-start'
    },
    checkboxText: {
      fontSize: 18,
      marginLeft: 10,
      color: BLACK,
      opacity: 0.9
    },
    plannerBox: {
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: Dimensions.get('screen').height * 0.01,
      alignItems: 'center'
    },
    title: {
      fontSize: 20,
      marginBottom: 15,
      fontWeight: "bold"
    }
  })