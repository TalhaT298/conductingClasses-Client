import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { TfiThought } from "react-icons/tfi";


const Testimonial = () => {
    return (
        <section>
            <SectionTitle
            
            heading={"Visitors Says About Us"}
            // subHeading={"National and International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore opportunities, collaborate and give guidance to the students"}
            
            >
            </SectionTitle>
            
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide color="white" key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
            <div className="pb-20">
            <TfiThought className="" size='4.7rem' color='white'></TfiThought>
            </div>
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </section>
    );
};

export default Testimonial;