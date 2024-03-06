import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from "../../../assets/41.webp"
import img2 from "../../../assets/42.webp"
import img3 from "../../../assets/43.webp"
import img4 from "../../../assets/44.webp"
import img5 from "../../../assets/45.webp"
import img6 from "../../../assets/46.webp"
import img7 from "../../../assets/47.webp"
import img8 from "../../../assets/48.webp"
import img9 from "../../../assets/49.webp"
import img10 from "../../../assets/50.webp"
import img11 from "../../../assets/51.webp"

const Mark = () => {
    return (
        <div>
    <Marquee className='my-5'>
        {/* //130*130 */}
        <img className='h-32 w-32' src={img1} alt="" style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img2} alt="" style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img3} alt="" style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img4} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img5} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img6} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img7} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img8} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img9} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img10} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img11} alt=""  style={{ marginRight: '20px' }}/>
    </Marquee>
</div>

    );
};

export default Mark;