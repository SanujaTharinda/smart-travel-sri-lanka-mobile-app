import { createSelector } from '@reduxjs/toolkit';


//Selectors
export const getUsersList = createSelector(
    state => state.firestore.users,
    users => users
);

