import React from 'react';
import ScrollableCorousel from '../../components/common/ScrollableCorousel';
import { NAVIGATION } from '../../constants';


const categories = [{
    id: 1,
    title: "Religous",
    source: require('../../../assets/categories/religous.jpg'),
},
{
    id: 2,
    title: "Wild Life",
    source: require('../../../assets/categories/wildlife.jpg'),
},
{
    id: 3,
    title: "Beach",
    source: require('../../../assets/home/3.jpg'),
},

];

const events = [{
    id: 1,
    title: "Sinhala And Tamil New Year",
    date: "13/14th April",
    venue: "Around The Country",
    source: require('../../../assets/upcomingEvents/newyear.png'),
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus non est non consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis porta scelerisque orci quis fermentum. Praesent ultrices tortor sed accumsan molestie. Etiam sit amet lacus vitae sem laoreet suscipit. Praesent massa lectus, condimentum id auctor sit amet, venenatis eget leo. Nunc cursus laoreet erat, sit amet pretium risus venenatis ut. Pellentesque malesuada leo in justo volutpat, sit amet lacinia ante eleifend. Aenean fringilla nulla vitae sem vestibulum, ac convallis augue ornare. Donec ante metus, varius vel dolor at, pharetra ullamcorper elit. Vivamus imperdiet pellentesque orci, eget fringilla lectus sagittis quis. Nunc turpis magna, tempus vel pretium ac, vulputate vel nisl. Sed semper urna ligula, varius mattis sapien semper quis. Vivamus mi mauris, aliquam eget justo et, cursus blandit odio. Vivamus magna elit, cursus eget tellus id, tincidunt imperdiet lorem."

},
{
    id: 2,
    title: "Vesak",
    date: "May",
    venue: "Around The Country",
    source: require('../../../assets/upcomingEvents/vesak.png'),
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus non est non consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis porta scelerisque orci quis fermentum. Praesent ultrices tortor sed accumsan molestie. Etiam sit amet lacus vitae sem laoreet suscipit. Praesent massa lectus, condimentum id auctor sit amet, venenatis eget leo. Nunc cursus laoreet erat, sit amet pretium risus venenatis ut. Pellentesque malesuada leo in justo volutpat, sit amet lacinia ante eleifend. Aenean fringilla nulla vitae sem vestibulum, ac convallis augue ornare. Donec ante metus, varius vel dolor at, pharetra ullamcorper elit. Vivamus imperdiet pellentesque orci, eget fringilla lectus sagittis quis. Nunc turpis magna, tempus vel pretium ac, vulputate vel nisl. Sed semper urna ligula, varius mattis sapien semper quis. Vivamus mi mauris, aliquam eget justo et, cursus blandit odio. Vivamus magna elit, cursus eget tellus id, tincidunt imperdiet lorem."
},
];



const Corousels = () => {
    return (<>
        <ScrollableCorousel
            title='Categories'
            destination={NAVIGATION.category}
            elements={categories}
        />
        <ScrollableCorousel
            title='Upcoming Events'
            destination={NAVIGATION.event}
            elements={events}
        />
    </>
    );
}

export default Corousels;