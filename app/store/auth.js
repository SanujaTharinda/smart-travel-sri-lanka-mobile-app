import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

//Auth Slice
const slice = createSlice({
    name: "Auth",
    initialState: {
        authError: null,
        loggingIn: false,
        editingProfile: false,
        editingProfile: {
            requested: false,
            failed: false,
            succeeded: false
        }
    },
    reducers: {
        //Events -> Event Handlers
        userLoginRequested(auth, action) {
            auth.loggingIn = true;

        },
        userSuccessfullyLoggedIn(auth, action) {
            auth.authError = null;
            auth.loggingIn = false;
        },

        userLogInFailed(auth, action) {
            auth.authError = "Login Failed...";
            auth.loggingIn = false;
        },
        editProfileRequested(auth, action) {
            auth.editingProfile = {
                requested: true,
                failed: false,
                succeeded: false
            };
        },
        resettedEditProfile(auth, action) {
            auth.editingProfile = {
                requested: false,
                failed: false,
                succeeded: false
            };
        },
        editProfileSucceeded(auth, action) {
            auth.editingProfile = {
                requested: false,
                failed: false,
                succeeded: true
            };
        },
        editProfileFailed(auth, action) {
            auth.editingProfile = {
                requested: false,
                failed: true,
                succeeded: false
            };
        }
    }
});

//Reducer
export default slice.reducer;

//Action Creators
export const { 
    userLoginRequested, 
    userSuccessfullyLoggedIn, 
    userLogInFailed,
    editProfileFailed,
    editProfileRequested,
    editProfileSucceeded,
    resettedEditProfile 
} = slice.actions;


/* 
    Implement the functionalities relevant to authentication here
    This is the only place used for communicating with the backend
*/
export const signIn = (email, password) => {
    return async (dispatch, getState, { getFirebase }) => {
        try {
            dispatch(userLoginRequested());
            const firebase = getFirebase();
            await firebase.login({email, password});
            dispatch(userSuccessfullyLoggedIn())
        } catch (e) {
            dispatch(userLogInFailed())
        }
    }
}

export const signOut = () => {
    return async (dispatch, getState, { getFirebase }) => {
        try {
            const firebase = getFirebase();
            firebase.auth().signOut();
        } catch (e) {
            console.log(e);
        }
    }
};

export const editProfile = (updatedProfile) => {
    return async (dispatch,getState, { getFirebase }) => {
        try {
            const firebase = getFirebase();
            dispatch(editProfileRequested());
            const result = await firebase.updateProfile(updatedProfile);
            console.log(result);
            dispatch(editProfileSucceeded());
        } catch (e) {
            dispatch(editProfileFailed());
            console.log(e);
        }
    }
};

export const resetEditProfile = () => {
    return (dispatch,getState, { getFirebase }) => {
        dispatch(resettedEditProfile());
    }
};



//Selectors
export const getAuth = createSelector(
    state => state.firebase.auth,
    auth => auth
);

export const getProfile = createSelector(
    state => state.firebase.profile,
    profile => profile
);

export const getUserLoggingInStatus = createSelector(
    state => state.auth.loggingIn,
    s => s
);

export const getAuthError = createSelector(
    state => state.auth.authError,
    a => a
);

export const getEditProfileStatus = createSelector(
    state => state.auth.editingProfile,
    e => e
);
