import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from "../../../assets/tailwind.png"
import img2 from "../../../assets/visual.png"
import img3 from "../../../assets/vite.png"
import img4 from "../../../assets/yarn.png"

const Mark = () => {
    return (
        <div>
            <Marquee className='gap-6'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </Marquee>
        </div>
    );
};

export default Mark;