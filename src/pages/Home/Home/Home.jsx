import React from "react";
import Banner from "../Banner/Banner";
import Photos from "../../Photos/Photos";
import Testimonial from "../Testimonial/Testimonial";
import Faculties from "../Faculties/Faculties";
import RecentEvents from "../RecentEvents/RecentEvents";
import Mark from "../Mark/Mark";
import Campus from "../Campus/Campus";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Faculties></Faculties>
      <Campus></Campus>
      <RecentEvents></RecentEvents>
      <Mark></Mark>
      <Testimonial></Testimonial>
      <Photos></Photos>
    </div>
  );
};

export default Home;
