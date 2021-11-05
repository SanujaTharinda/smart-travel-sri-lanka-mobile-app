import { createSelector, createSlice } from '@reduxjs/toolkit';
import { collections } from '../../firebase';

//Users Slice
const slice = createSlice({
    name: "Users",
    initialState: {
        registerError: null,
        registering: false,
        creatingTrip: false,
        createTripSuccessfull: false,
        createTripError: null,
        createdTrip: null
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
        },

        createTripRequested(users, action){
            users.creatingTrip = true;
        },

        createTripFailed(users, action){
            users.creatingTrip = false;
            users.createTripError = "Trip Creation Failed..."
        },

        createTripSucceeded(users, action){
            users.createTripError = null;
            users.creatingTrip = false;
            users.createTripSuccessfull = true;
            users.createdTrip = null;
        },
        createdTripSuccessStatusChanged(users, action){
            users.createTripSuccessfull = action.payload;
        },
        createdTripSet(users, action){
            users.createdTrip = action.payload;
        }
    }
});

//Reducer
export default slice.reducer;

//Action Creators
export const { 
    userRegisterRequested, 
    userSuccessfullyRegistered, 
    userRegisterFailed,
    createTripRequested,
    createTripFailed,
    createTripSucceeded,
    createdTripSuccessStatusChanged,
    createdTripSet
} = slice.actions;



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


export const createTrip = (data, auth) => {
    return async (dispatch, getState, { getFirestore }) => {
        try {
            const { name, startLocation, startDate, endDate, travelMode, tripDestinations: destinations } = data;
            console.log("Data: ", data);
            const firestore = getFirestore();
            dispatch(createTripRequested());
            await firestore.collection(collections.users.name).doc(auth.uid).collection(collections.users.trips.name).add({
                name,
                startLocation: { latitude: startLocation.latitude, longitude: startLocation.longitude },
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                travelMode,
                destinations,
                status: "In Future"
            });
            dispatch(createTripSucceeded());
        } catch (e) {
            dispatch(createTripFailed());
        }
    }
};

export const changeCreatedTripStatus = (status) => {
    return ( dispatch ) => {
        dispatch(createdTripSuccessStatusChanged(status));
    }
};

export const setCreatedTrip = (created) => {
    return ( dispatch ) => {
        dispatch(createdTripSet(created));
    }
};


//Selectors
export const getUsersList = createSelector(
    state => state.firestore.users,
    users => users
);


export const getUserRegisteringStatus = createSelector(
    state => state.users,
    u => u.registering
);

export const getTripCreatingStatus = createSelector(
    state => state.users,
    u => u.creatingTrip
);

export const getTripCreatingError = createSelector(
    state => state.users,
    u => u.createTripError
);

export const getTripCreatedStatus = createSelector(
    state => state.users,
    u => u.createTripSuccessfull
);

export const getCreatedTrip = createSelector(
    state => state.users,
    u => u.createdTrip
);




