import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feature from "../../../assets/feature.webp";
import "./Campus.css";
import { Link } from "react-router-dom";
const Campus = () => {
  return (
    <section className="featured-item bg-fixed text-black mb-12 pt-6 my-20">
      <SectionTitle
        subHeading={"check it out"}
        heading={"Feature"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-20 pt-12 px-36">
        <div>
          <img src={feature} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug ,224</p>
          <p className="uppercase">WhereI can gt Some</p>
          <p className="text-white">
          Rangpur Engineering College (REC) was established in the year 2014. It is affiliated by the University of Rajshahi. It is the First Non-Govt. Engineering College in Rangpur Division. This is the newly based Institute, imparting technical education leading to B.ScEngg. in the various disciplines of Engineering.
          </p>
          <Link to="/">
            <button className="btn btn-outline border-0 border-b-4 text-black">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Campus;
