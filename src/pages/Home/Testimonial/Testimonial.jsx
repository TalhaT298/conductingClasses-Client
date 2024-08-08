// import React, { useEffect, useState } from "react";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";
// import "./Testimonial.css"; 
// import background from '../../../assets/lo.gif';


// const Testimonial = () => {
//   const [reviews, setReviews] = useState([]);
//   useEffect(() => {
//     fetch("reviews.json")
//       .then((res) => res.json())
//       .then((data) => setReviews(data));
//   }, []);
//   return (
//     <section className="my-6" style={{backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "200px"}}>
      // <SectionTitle className=""
      //   heading={"Feedback Received"}
      // ></SectionTitle>
//       <Swiper pagination={{ clickable: true }} modules={[Pagination]} autoplay={{ delay: 2000 }} className="mySwiper">
//         {reviews.map((review) => (
//           <SwiperSlide color="black" key={review._id}>
//             <div className="flex flex-col items-center mx-24 my-8">
//               <div className="pb-4">
             
//               </div>
              
//               <img
//                 className="w-40 rounded-full"
//                 src={review.img}
//                 alt={review.name}
//               />
//               <p className="py-8">{review.details}</p>
//               <h3 className="text-2xl text-black">{review.name}</h3>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Testimonial;


// import React, { useEffect, useState } from "react";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";
// import "./Testimonial.css"; // Import your custom CSS file

// const Testimonial = () => {
//   const [reviews, setReviews] = useState([]);
  
//   useEffect(() => {
//     fetch("reviews.json")
//       .then((res) => res.json())
//       .then((data) => setReviews(data));
//   }, []);
  
//   return (
//     <section className="my-10">
//       <SectionTitle heading={"Visitors Says About Us"}></SectionTitle>
//       <Swiper
//         pagination={{ clickable: true }}
//         modules={[Pagination]}
//         autoplay={{ delay: 3000 }} // Autoplay with a delay of 3 seconds
//         loop={true} // Enable loop
//         slidesPerView={3} // Number of slides per view
//         spaceBetween={30} // Space between slides
//         className="mySwiper"
//       >
//         {reviews.map((review) => (
//           <SwiperSlide color="black" key={review._id}>
//             <div className="flex flex-col items-center mx-24 my-8">
//               <div className="pb-20">
//                 {/* <TfiThought className="" size='4.7rem' color='black'></TfiThought> */}
//               </div>
//               {/* <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly /> */}
//               <img
//                 className="w-40 rounded-full"
//                 src={review.img}
//                 alt={review.name}
//               />
//               <p className="py-8">{review.details}</p>
//               <h3 className="text-2xl text-orange-400">{review.name}</h3>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Testimonial;


import React, { useState, useEffect } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import j1 from "../../../assets/101.png";
import j2 from "../../../assets/102.png";
import j3 from "../../../assets/103.png";
import j4 from "../../../assets/104.png"; // New image
import j5 from "../../../assets/105.png"; // New image
import j6 from "../../../assets/106.png"; // New image

const Testimonial = () => {
  const [currentPhase, setCurrentPhase] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prevPhase) => (prevPhase % 6) + 1); // Cycles through 1 to 6
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <SectionTitle
        className=""
        heading={"Feedback Received"}
      ></SectionTitle>
      <div className="flex items-center justify-center bg-gray-100 py-10">
        {/* Testimonial 1 */}
        <div className={`max-w-4xl p-8 rounded-lg ${currentPhase === 1 ? '' : 'hidden'}`}>
          <p className="text-xl italic font-light text-black mb-4">
            "I love the variety and quality of the products at Kawaivelvet. The customer service is exceptional. I highly recommend it to anyone looking for great makeup and girl items"
          </p>
          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full" src={j1} alt="Emily Johnson"></img>
            <div className="ml-4">
              <p className="text-sm font-semibold text-gray-700">Emily Johnson</p>
              <p className="text-sm text-gray-500">Founder of Glamour & Glow</p>
            </div>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className={`max-w-4xl p-8 rounded-lg ${currentPhase === 2 ? '' : 'hidden'}`}>
          <p className="text-xl italic font-light text-gray-800 mb-4">
            "Kawaivelvet offers a fantastic shopping experience with top-notch products and excellent customer support. It's my go-to place for all my beauty needs"
          </p>
          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full" src={j2} alt="Sarah Williams"></img>
            <div className="ml-4">
              <p className="text-sm font-semibold text-gray-700">Sarah Williams</p>
              <p className="text-sm text-gray-500">Beauty Blogger at Beauty Bliss</p>
            </div>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className={`max-w-4xl p-8 rounded-lg ${currentPhase === 3 ? '' : 'hidden'}`}>
          <p className="text-xl italic font-light text-gray-800 mb-4">
            "Kawaivelvet never fails to impress with its amazing selection of products and outstanding customer service. I can't recommend it enough!"
          </p>
          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full" src={j3} alt="Lisa Brown"></img>
            <div className="ml-4">
              <p className="text-sm font-semibold text-gray-700">Lisa Brown</p>
              <p className="text-sm text-gray-500">Makeup Artist and Beauty Consultant</p>
            </div>
          </div>
        </div>
        {/* Testimonial 4 */}
        <div className={`max-w-4xl p-8 rounded-lg ${currentPhase === 4 ? '' : 'hidden'}`}>
          <p className="text-xl italic font-light text-gray-800 mb-4">
            "The products at Kawaivelvet are always high quality and the team is incredibly helpful. It's my favorite place for shopping!"
          </p>
          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full" src={j4} alt="Anna Lee"></img>
            <div className="ml-4">
              <p className="text-sm font-semibold text-gray-700">Anna Lee</p>
              <p className="text-sm text-gray-500">Fashion Influencer</p>
            </div>
          </div>
        </div>
        {/* Testimonial 5 */}
        <div className={`max-w-4xl p-8 rounded-lg ${currentPhase === 5 ? '' : 'hidden'}`}>
          <p className="text-xl italic font-light text-gray-800 mb-4">
            "Shopping at Kawaivelvet has been a game-changer for me. The products are top-notch, and the customer service is outstanding."
          </p>
          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full" src={j5} alt="Sophie Turner"></img>
            <div className="ml-4">
              <p className="text-sm font-semibold text-gray-700">Sophie Turner</p>
              <p className="text-sm text-gray-500">Professional Makeup Artist</p>
            </div>
          </div>
        </div>
        {/* Testimonial 6 */}
        <div className={`max-w-4xl p-8 rounded-lg ${currentPhase === 6 ? '' : 'hidden'}`}>
          <p className="text-xl italic font-light text-gray-800 mb-4">
            "Kawaivelvet always delivers on quality and service. I wouldn't shop anywhere else!"
          </p>
          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full" src={j6} alt="Mia Clark"></img>
            <div className="ml-4">
              <p className="text-sm font-semibold text-gray-700">Mia Clark</p>
              <p className="text-sm text-gray-500">Beauty Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
