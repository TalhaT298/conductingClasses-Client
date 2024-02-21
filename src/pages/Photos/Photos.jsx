import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slide1 from '../../assets/78.webp'
import slide2 from '../../assets/77.webp'
import slide3 from '../../assets/79.webp'
const Photos = () => {
    return (
        <div>
            <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Photos;