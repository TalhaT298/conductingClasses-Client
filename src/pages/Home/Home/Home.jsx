import React from 'react';
import Banner from '../Banner/Banner';
import Photos from '../../Photos/Photos';
import Testimonial from '../Testimonial/Testimonial';
import Faculties from '../Faculties/Faculties';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Faculties></Faculties>
            <Testimonial></Testimonial>
            <Photos></Photos>
        </div>
    );
};

export default Home;