import React from "react";
import Banner from "../Banner/Banner";
import Photos from "../../Photos/Photos";
import Testimonial from "../Testimonial/Testimonial";
import Faculties from "../Faculties/Faculties";
import RecentEvents from "../RecentEvents/RecentEvents";
import Mark from "../Mark/Mark";
import Campus from "../Campus/Campus";
import Notice from "../Notice/Notice";
import Offer from "../Offer/Offer";
import Scholarship from "../Scholarship/Scholarship";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Scholarship></Scholarship>
      <Campus></Campus>
      <Faculties></Faculties>
      
      <Offer></Offer>
      <Notice></Notice>
      <RecentEvents></RecentEvents>
      <Mark></Mark>
      <Testimonial></Testimonial>
      <Photos></Photos>
    </div>
  );
};

export default Home;
