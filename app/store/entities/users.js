import { createSelector, createSlice } from '@reduxjs/toolkit';

//Users Slice
const slice = createSlice({
    name: "Users",
    initialState: {
        registerError: null,
        registering: false
    },
    reducers: {
        //Events -> Event Handlers
        userRegisterRequested(users, action) {
            users.registering = true;

        },
        userSuccessfullyRegistered(users, action) {
            users.registerError = null;
            users.registering = false;
        },

        userRegisterFailed(users, action) {
            users.registerError = "Register Failed...";
            users.registering = false;
        }
    }
});

//Reducer
export default slice.reducer;

//Action Creators
export const { userRegisterRequested, userSuccessfullyRegistered, userRegisterFailed } = slice.actions;



export const register = (credentials, profile) => {
    return async (dispatch, getState, { getFirebase }) => {
        try {
            dispatch(userRegisterRequested());
            const firebase = getFirebase();
            await firebase.createUser(credentials,profile);
            dispatch(userSuccessfullyRegistered());
        } catch (e) {
            dispatch(userRegisterFailed());
        }
    }
}




//Selectors
export const getUsersList = createSelector(
    state => state.firestore.users,
    users => users
);


export const getUserRegisteringStatus = createSelector(
    state => state.users,
    u => u.registering
);

