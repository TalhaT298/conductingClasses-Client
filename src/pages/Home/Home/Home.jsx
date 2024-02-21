import React from 'react';
import Banner from '../Banner/Banner';
import Photos from '../../Photos/Photos';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Testimonial></Testimonial>
            <Photos></Photos>
        </div>
    );
};

export default Home;