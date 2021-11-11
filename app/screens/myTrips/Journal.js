import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, ScrollView, Dimensions} from "react-native";
import { Button, Text } from "@ui-kitten/components";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import { WHITE, PRIMARY, BLACK, GREY } from "./../../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { getChecklistUpdatingStatus, getTripByTripID, saveJournal } from "../../store/entities/users";
import { getAuth } from "../../store/auth";
import Spinner from "../../components/common/Spinner";

const Journal = ({ route }) => {
  const dispatch = useDispatch();
  const ref = React.useRef();
  const [ content, setContent ] = useState("");
  const { tripID } = route.params;
  const trip = useSelector(getTripByTripID(tripID));
  const updating = useSelector(getChecklistUpdatingStatus);  
  const auth = useSelector(getAuth);

  const handleSave = () => {
    dispatch(saveJournal(content, auth, trip.id ));
  };

  return (
    <ScrollView style={styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.title}>Trip Journal</Text>
                <Button
                    onPress = {handleSave}
                    size='small'
                    title='submit'
                    disabled = {updating}
                    style={styles.button}>
                    {(evaProps) => <Text evaProps style={styles.buttonText}>{updating ? <Spinner/> : 'Save'}</Text>}
                </Button>
            </View>
            <RichToolbar
                selectedIconTint = {PRIMARY}
                iconTint = {BLACK}
                editor={ref}
                actions={[
                    actions.setBold,
                    actions.setItalic,
                    actions.insertBulletsList,
                    actions.insertOrderedList
                ]}
            />

            <RichEditor
                onChange = {(html) => setContent(html)}
                ref={ref}
                initialContentHTML={trip.journal ? trip.journal : "<h1>Write Here...</h1>"}
            />



      

    </ScrollView>
  );
};

export default React.memo(Journal);

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        backgroundColor: GREY,
        width: 100,
        height: "90%"
    },
    buttonText: {
        color: PRIMARY,
        fontSize: 20,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
    },
    titleContainer: {
        flexDirection: "row",  
        alignItems: "center",
        backgroundColor: PRIMARY,
        height: 50,
        justifyContent: "space-around"
    },
    title: {
        fontSize: 20,
        color: WHITE,
        fontWeight: "bold"
    }

});