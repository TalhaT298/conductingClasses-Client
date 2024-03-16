import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const CSE = () => {
    return (
        <div>
            <Link to="/cse">
            <SectionTitle
        className="font-serif"
        heading={"Recent Events"}
        // subHeading={"National and International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore opportunities, collaborate and give guidance to the students"}
      ></SectionTitle>
            
            </Link>
        </div>
    );
};

export default CSE;