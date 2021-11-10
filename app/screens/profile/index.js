import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, View, StyleSheet, Text, Dimensions} from 'react-native';
import { Button,Card, Modal } from '@ui-kitten/components';
import ElementRow from './ElementRow';
import { getAuth, getProfile, getEditProfileStatus, editProfile, resetEditProfile } from "./../../store/auth";
import { BLACK, GREY, PRIMARY, WHITE } from './../../theme/colors';
import EditProfileForm from './EditProfileForm';

const Profile = () => {
    const profile = useSelector(getProfile);
    const auth = useSelector(getAuth);
    const profileEditing = useSelector(getEditProfileStatus);
    const dispatch = useDispatch();
    console.log("Profile: ", profile);
    console.log("Auth: ", auth);
    console.log("Editing: ", profileEditing);

    const [ editFormVisible, setEditFormVisible ] = useState(false);

    const handleEdit = (data) => {
        dispatch(editProfile(data));
    };

    return(
        <View style = {styles.container}>
            <View style = {styles.photoContainer}>
                <Text style = {styles.title}>Profile</Text>
                <Image source = {require("./../../../assets/icon.png")} style = {styles.image}/>
                <Text style = {styles.name}>{profile.firstName + " " + profile.lastName}</Text>
            </View>
            <View style = {styles.detailsContainer}>

               <ElementRow property = {"Email"} value = {auth.email} icon = {"email-outline"}/>
               <ElementRow property = {"First Name"} value = {profile.firstName} icon = {"person-outline"}/>
               <ElementRow property = {"Last Name"} value = {profile.lastName} icon = {"person-outline"}/>
               <Button
                    size='small'
                    onPress={() => setEditFormVisible(true)}
        
                    style={styles.button}>
                    {(evaProps) => <Text {...evaProps} style={styles.buttonText}>Edit Profile</Text>}
                </Button>
            </View>
            <Modal 
                backdropStyle = {styles.backDrop}
                visible={editFormVisible}
                style = {styles.modal}
            >
                <EditProfileForm
                    onCancelPress = {() => setEditFormVisible(false)}
                    onEditPress = {(data) => handleEdit(data)}
                    onUnmount = {() => dispatch(resetEditProfile())}
                    profile = {profile}
                    loading = {profileEditing.requested}
                    message = {profileEditing.succeeded ? "Profile Updated Successfully" : profileEditing.failed ? "Profile Update Failed" : null}
                    messageColor = {profileEditing.succeeded ? PRIMARY : "red"}
                />
            </Modal>

        </View>
    )
};

export default Profile;

const styles = StyleSheet.create({
    backDrop: {
        backgroundColor: WHITE,
        opacity: 0.9
    },
    button: {
        borderRadius: 30,
        marginTop: Dimensions.get('screen').height * 0.04,
        width: "85%",
        alignSelf: "center"
    },
    buttonText: {
        color: WHITE,
        fontSize: 30
    },
    container: {
        flex: 1,
        backgroundColor: WHITE
    },
    photoContainer: {
        flex: 0.4,
        alignItems: "center",
        paddingVertical: 25,
        borderBottomColor: BLACK,
        borderWidth: 0.3
    },
    detailsContainer: {
        flex: 1,
        paddingTop: 10,
        alignItems: "flex-start"
    },
    detailsRow: {
        paddingLeft: 40
    },
    icon: {
        width: 25,
        height: 25
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 15
    },
    modal: {
        width: "95%"
    }, 
    name: {
        fontSize: 15,
        fontWeight: "bold",
        color: PRIMARY
    } ,
    title: {
        fontSize: 25,
        color: BLACK,
        fontWeight: "bold"
    }
});