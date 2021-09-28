
import { createSelector } from '@reduxjs/toolkit';

export const getEvents = createSelector(
    state => state.firestore.ordered.events,
    e => e ? e : []
);
