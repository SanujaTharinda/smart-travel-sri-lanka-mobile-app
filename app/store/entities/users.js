import { createSelector, createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
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
        createdTrip: null,
        updatingChecklist: false,
        reviewAdding: false
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
        },
        updateCheckListRequested(users, action){
            users.updatingChecklist = true;
        },
        updateCheckListOver(users, action){
            users.updatingChecklist = false;
        },
        reviewAddRequested(users, action){
            users.reviewAdding = true;
        },
        reviewAddOver(users, action){
            users.reviewAdding = true;
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
    createdTripSet,
    updateCheckListRequested,
    updateCheckListOver,
    reviewAddRequested,
    reviewAddOver
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
                destinations
            });
            const previous = moment(new Date(startDate)).subtract(1, "days");
            console.log("Previous: ", previous);
            if(previous.diff(moment(), "days") + 1 > 0){
                await firestore.collection(collections.users.name).doc(auth.uid).collection(collections.users.notifications.name).add({
                    content: `Reminder: Your ${name} starts on ${new Date(startDate).getDate()}`,
                    isRead: false,
                    popUpDay: previous.toDate()
                });
            }

            dispatch(createTripSucceeded());
        } catch (e) {
            dispatch(createTripFailed());
            console.log(e);
        }
    }
};

export const addReview = (review, destinationId) => {
    return async (dispatch, getState, { getFirestore }) => {
        try {
            console.log("Review: ", review);
            console.log("Destination ID: ", destinationId);
            const firestore = getFirestore();
            dispatch(reviewAddRequested());
            await firestore.collection(collections.destinations.name)
                                .doc(destinationId)
                                .collection(collections.destinations.reviews.name)
                                .add(review);
            dispatch(reviewAddOver());
        } catch (e) {
            dispatch(reviewAddOver());
            console.log(e);
        }
    }
};

export const updateCheckList = (data, auth, tripId, checkListID) => {
    return async (dispatch, getState, { getFirestore }) => {
        try {
            console.log("Data: ", data);
            console.log("Auth: ", auth);
            console.log("Trip ID: ", tripId);
            console.log("CheckList ID: ", checkListID);
            const firestore = getFirestore();
            dispatch(updateCheckListRequested());
            await firestore.collection(collections.users.name).doc(auth.uid).collection(collections.users.trips.name).doc(tripId).collection("checklists").doc(checkListID).update({
                backpack: data
            });
            dispatch(updateCheckListOver());
        } catch (e) {
            dispatch(updateCheckListOver());
            console.log(e);
        }
    }
};

export const saveJournal = (data, auth, tripId) => {
    return async (dispatch, getState, { getFirestore }) => {
        try {
            const firestore = getFirestore();
            dispatch(updateCheckListRequested());
            await firestore.collection(collections.users.name).doc(auth.uid).collection(collections.users.trips.name).doc(tripId).update({
                journal: data
            });
            dispatch(updateCheckListOver());
        } catch (e) {
            dispatch(updateCheckListOver());
            console.log(e);
        }
    }
};

export const markRead = (auth, notificationID) => {
    return async (dispatch, getState, { getFirestore }) => {
        try {
            const firestore = getFirestore();
            dispatch(updateCheckListRequested());
            await firestore.collection(collections.users.name).doc(auth.uid).collection(collections.users.notifications.name).doc(notificationID).update({
                isRead: true
            });
            dispatch(updateCheckListOver());
        } catch (e) {
            dispatch(updateCheckListOver());
            console.log(e);
        }
    }
};

export const addCheckList = (data, auth, tripId) => {
    return async (dispatch, getState, { getFirestore }) => {
        try {
            const firestore = getFirestore();
            dispatch(updateCheckListRequested());
            await firestore.collection(collections.users.name).doc(auth.uid).collection(collections.users.trips.name).doc(tripId).collection("checklists").add({
                backpack: data
            });
            dispatch(updateCheckListOver());
        } catch (e) {
            dispatch(updateCheckListOver());
            console.log(e);
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

export const getFirestoreData = createSelector(
    state => state.firestore,
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

export const getChecklistUpdatingStatus = createSelector(
    state => state.users,
    u => u.updatingChecklist
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

export const getReviewAddingStatus = createSelector(
    state => state.users,
    u => u.reviewAdding
);

export const getTrips = createSelector(
    state => state.firestore.ordered.trips,
    trips => trips
);

export const getCheckList = (tripID) => createSelector(
    state => state.firestore.data[tripID],
    checklist => checklist ? checklist : undefined,
);

export const getTodayNotifications = createSelector(
    state => state.firestore.ordered.notifications,
    notifications => notifications ? notifications.filter(n => moment().diff(moment(n.popUpDay.toDate()), "days") === 0) : []
);

export const getReadNotifications = createSelector(
    getTodayNotifications,
    notifications => notifications ? notifications.filter(n => n.isRead === true) : []
);

export const getUnReadNotifications = createSelector(
    getTodayNotifications,
    notifications => notifications ? notifications.filter(n => n.isRead === false) : []
);

export const getOngoingTrips = createSelector(
    getTrips,
    trips => trips ? trips.filter(t => moment().diff(moment(t.startDate.toDate()), "days") >=0 && moment(t.endDate.toDate()).diff(moment(), "days") >=0 ) : []
);

export const getInFutureTrips = createSelector(
    getTrips,
    trips => trips ? trips.filter(t => moment().diff(moment(t.startDate.toDate()), "days") < 0 ) : []
);

export const getPastTrips = createSelector(
    getTrips,
    trips => trips ? trips.filter(t => moment().diff(moment(t.endDate.toDate()), "days") > 0 ) : []
);

export const getTripByTripID = (tripID) => createSelector(
    getTrips,
    trips => trips.find(t => t.id === tripID)
);




