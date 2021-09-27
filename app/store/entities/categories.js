import { createSelector } from "reselect";



export const  getCategories = createSelector(
    state => state.firestore.ordered.categories,
    c => c
);