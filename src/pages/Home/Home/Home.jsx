import React from 'react';
import Banner from '../Banner/Banner';
import Photos from '../../Photos/Photos';
import Testimonial from '../Testimonial/Testimonial';
import Faculties from '../Faculties/Faculties';
import RecentEvents from '../RecentEvents/RecentEvents';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Faculties></Faculties>
            <RecentEvents></RecentEvents>
            <Testimonial></Testimonial>
            <Photos></Photos>
        </div>
    );
};

export default Home;