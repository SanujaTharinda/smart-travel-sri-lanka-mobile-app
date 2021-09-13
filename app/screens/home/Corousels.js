import React from 'react';
import ScrollableCorousel from '../../components/common/ScrollableCorousel';

const Corousels = () => {
    return (<>
        <ScrollableCorousel
            title='Categories'
            images={[{
                id: 1,
                text: "Religous",
                source: require('../../../assets/home/2.jpg'),
            },
            {
                id: 2,
                text: "Beach",
                source: require('../../../assets/home/3.jpg'),
            },
            {
                id: 3,
                text: "Wild Life",
                source: require('../../../assets/home/1.jpg'),
            }
            ]}
        />
        <ScrollableCorousel
            title='Upcoming Events'
            images={[{
                id: 1,
                text: "New Year",
                source: require('../../../assets/home/3.jpg'),
            },
            {
                id: 2,
                text: "Vesak Season",
                source: require('../../../assets/home/2.jpg'),
            },
            ]}
        />
    </>
    );
}

export default Corousels;