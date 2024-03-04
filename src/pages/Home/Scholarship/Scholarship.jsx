import React from 'react';
import sh1 from "../../../assets/sh5.webp";
import sh2 from "../../../assets/sh2.webp";
// import sh7 from "../../../assets/sh7.webp";
import sh8 from "../../../assets/sh8.webp";
import sh3 from "../../../assets/sh3.webp";
const Scholarship = () => {
    return (
        <div className='max-w-[1200px]'>
            <div className="flex justify-center items-center">
                <img className='w-[320px]' src={sh1} alt="" />
                <img className='w-[320px]' src={sh2} alt="" />
                <img className='w-[320px]' src={sh8} alt="" />
                {/* <img className='w-[320px]' src={sh7} alt="" /> */}
                <img className='w-[320px]' src={sh3} alt="" />
                 
            </div>
        </div>
    );
};

export default Scholarship;