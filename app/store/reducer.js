import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './auth';
import systemReducer from './system';
import usersReducer from './entities/users';

//The Root Reducer
export const reducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    system: systemReducer,
    users: usersReducer
});