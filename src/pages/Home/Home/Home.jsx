import React from "react";
import Banner from "../Banner/Banner";
import Photos from "../../Photos/Photos";
import Testimonial from "../Testimonial/Testimonial";
import Faculties from "../Faculties/Faculties";
import RecentEvents from "../RecentEvents/RecentEvents";
import Mark from "../Mark/Mark";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Faculties></Faculties>
      <RecentEvents></RecentEvents>
      <Mark></Mark>
      <Testimonial></Testimonial>
      <Photos></Photos>
    </div>
  );
};

export default Home;
