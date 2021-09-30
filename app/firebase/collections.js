
/**
 * Firestore collections
 * Defined here for reusability
 * Ex:{
 *  users: {name: 'users' },
 *  reviews: {
 *      name: 'reviews,
 *      //If there are subcollections. Nest it like this
 *      subCollection: {
 *          name: 'exampleSubcollection'
 *      }
 *  }
 * }
 *      
 *  
 * 
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    users: { name: 'users' },
    trips: {
        name: 'trips'
    },
    categories: {
        name: 'categories'
    },
    destinations: {
        name: "destinations",
        activities: {
            name: "activities"
        },
        gallery: {
            name: 'gallery',
            images: {
                name: 'images',
                urls: {
                    name: 'urls'
                }
            },
            videos: {
                name: 'videos',
                urls: {
                    name: 'urls'
                }
            }
        },
        reviews: {
            name: 'reviews'
        }
    },
    events: {
        name: 'events'
    }
}