import { createSelector } from "reselect";

export const getAllDestinations = createSelector(
    state => state.firestore.ordered.destinations,
    d => d ? d : []
);


export const getPublishedDestinations = createSelector(
    getAllDestinations,
    destinations => destinations ? destinations.filter(d => d.published === true) : []
);


export const getPublishedDestinationsByCategory = (category) => createSelector(
    getPublishedDestinations,
    d => d ? d.filter(e => e.categories && e.categories.includes(category)) : []
);


export const getReviews = createSelector(
    state => state.firestore.ordered.reviews,
    r => r ? r : []
);

export const getDestinationImages = createSelector(
    state => state.firestore.ordered.destinationImages,
    i => i ? i[0].urls : []
);