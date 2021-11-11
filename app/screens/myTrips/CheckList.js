import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Icon, Input, Text, Button } from '@ui-kitten/components';
import Spinner from "../../components/common/Spinner";
import { BLACK, PRIMARY, WHITE, GREY } from '../../theme/colors';
import CheckListItem from './CheckListItem';
import { addCheckList, getCheckList, getChecklistUpdatingStatus, getFirestoreData, updateCheckList } from '../../store/entities/users';
import { getAuth } from "../../store/auth";
import { useFirestoreConnect } from 'react-redux-firebase';
import { collections } from '../../firebase';

const CheckList = ({onBackPress, tripID }) => {
    const auth = useSelector(getAuth);
    useFirestoreConnect([
        {
            collection: collections.users.name,
            doc: auth.uid,
            subcollections: [{
                collection: collections.users.trips.name,
                doc: tripID,
                subcollections: [{
                    collection: collections.users.trips.checklists.name
                }]
            }],
            storeAs: tripID
        }
    ]);
    const dispatch = useDispatch(); 
    const updating = useSelector(getChecklistUpdatingStatus);
    const checklist = useSelector(getCheckList(tripID));
    const [ checkListExists, setCheckListExists ] = useState(false);
    const [list, setList] = useState([]);
    const [ inputValue, setInputValue ] = useState("");
    const [error, setError ] = useState(false);


    useEffect(() => {
        if(checklist){
            setList(Object.values(checklist)[0].backpack);
            setCheckListExists(true);
        }
        console.log("List: ", checklist);
    }, [checklist])


    const handleAdd = () => {
        if(!inputValue) return setError(true);
        setError(false);
        setList([...list, {isChecked: false, item: inputValue}]);
    };

    const handleRemove = (index) => {
        const updated = [...list];
        updated.splice(index, 1);
        setList(updated);
    };

    const handleCheck = (next, index) => {
        console.log("next: ", next);
        console.log("Index: ", index);
        const updated = [...list];
        updated[index] = {...updated[index], isChecked: next};
        setList(updated);
  
    };

    const handleUpdate = () => {
        if(checkListExists)dispatch(updateCheckList(list, auth, tripID, Object.keys(checklist)[0]));
        else dispatch(addCheckList(list, auth, tripID))
    };

    return(
        <View style = {styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.title}>
                    Checklist
                </Text>
            </View>
            <View style = {styles.checkBoxContainer}>
                <View style = {styles.overViewContainer}>
                    <Text style = {styles.overViewItem}>Total Items: {list.length}    Checked: {list.filter(i => i.isChecked === true).length}</Text>
                </View>
                <View style = {styles.iconContainer}>
                    <Input
                        size='small'
                        textStyle={{ color: BLACK, height: 40 }}
                        value={inputValue}
                        placeholder='Enter item...'
                        onChangeText = {(text) => setInputValue(text)}
                        style={styles.input}
                    />
                    
                    <TouchableWithoutFeedback onPress = {handleAdd}>
                        <Icon
                            name = "plus-circle-outline"
                            fill = {PRIMARY}
                            style = {styles.icon}
                        />
                    </TouchableWithoutFeedback>
                </View>
                {error && <View style = {styles.errorContainer}>
                    <Text style = {styles.error}>{"Can't add an empty item..."}
                    
                    </Text>
                </View>}
                <View style = {styles.itemsContainer}>
                    {list.map((i, index) => <CheckListItem 
                                                key = {"Checklist " + index.toString()} {...i}
                                                onRemove = {() => handleRemove(index)}
                                                onCheck = {(next) => handleCheck(next, index)}/>)
                                                }
                                            
                </View>
            </View>
            <View style = {styles.buttonsContainer}>
                <Button
                    onPress = {handleUpdate}
                    disabled = {updating}
                    size='small'
                    style={styles.button}>
                        {(evaProps) => !updating ? <Text {...evaProps} style={styles.buttonText}>Update</Text> : <Spinner color = {WHITE}/>}
                </Button>
                <Button
                    onPress = {onBackPress}
                    size='small'
                    style={styles.button}>
                        {(evaProps) => <Text {...evaProps} style={styles.buttonText}>Back</Text>}
                </Button>
            </View>
        </View>
    );
};

export default React.memo(CheckList);

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        marginVertical: 10,
        elevation: 3,
        width: "90%"
    },
    buttonText: {
        color: WHITE,
        fontSize: 25
    }, 
    buttonsContainer: {
        alignItems: "center",
        flex: 1,
        height: "100%",
        marginBottom: 20
    },
    container: {
        width: Dimensions.get("window").width,
        minHeight: Dimensions.get("window").height,
    },
    checkBoxContainer: {
        paddingLeft: 20,
        marginTop: 25,
        minHeight: Dimensions.get("window").height * 0.45
    },
    error: {
        color: "red"
    },
    errorContainer: {
        paddingLeft: 10,
        marginTop: 5
    },
    icon: {
        width: 40,
        height: 40
    },
    iconContainer: {
        marginTop: 36,
        flexDirection: "row",
        alignItems: "center"
    },
    itemsContainer: {
        paddingLeft: 20,
        marginTop: 20
    },
    input: {
        backgroundColor: GREY,
        borderRadius: 50,
        width: "65%",
        marginRight: 20
    },
    inputLabel: {
        fontSize: 20,
        marginBottom: 10,
        color: PRIMARY
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",color: BLACK
    },
    titleContainer: {
        alignItems: "center",
    },
    overViewContainer: {
        backgroundColor: PRIMARY,
        height: 40,
        width: "90%",
        borderRadius: 30,
        padding: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    overViewItem: {
        color: WHITE,
        fontWeight: "bold"
    }
})