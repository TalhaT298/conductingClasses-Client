import React from 'react';
import sh1 from "../../../assets/sh1.webp";
import sh2 from "../../../assets/sh2.webp";
const Scholarship = () => {
    return (
        <div className='max-w-[1200px]'>
            <div className="flex justify-center items-center">
                <img className='w-[320px]' src={sh1} alt="" />
                <img className='w-[320px]' src={sh2} alt="" />
                <img className='w-[320px]' src={sh1} alt="" />
                <img className='w-[320px]' src={sh2} alt="" />
                 
            </div>
        </div>
    );
};

export default Scholarship;