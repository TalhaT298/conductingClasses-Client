import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "./Testimonial.css"; // Import your custom CSS file
import background from '../../../assets/lo.gif';


const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-6" style={{backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "200px"}}>
      <SectionTitle className=""
        heading={"Feedback Received"}
      ></SectionTitle>
      <Swiper pagination={{ clickable: true }} modules={[Pagination]} autoplay={{ delay: 2000 }} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide color="black" key={review._id}>
            <div className="flex flex-col items-center mx-24 my-8">
              <div className="pb-4">
                {/* <TfiThought className="" size='4.7rem' color='black'></TfiThought> */}
              </div>
              {/* <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly /> */}
              <img
                className="w-40 rounded-full"
                src={review.img}
                alt={review.name}
              />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-black">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;


