import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
const RecentEvents = () => {
  return (
    <div>
      <SectionTitle
        heading={"Recent Events"}
        // subHeading={"National and International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore opportunities, collaborate and give guidance to the students"}
      ></SectionTitle>
      <div className="flex justify-center item-center">
      <div className="card w-96 bg-base-100 shadow-xl mx-4">
          <figure className="px-4 pt-10">
            <img
              src="https://i.ibb.co/pxTDWWp/khela.webp"
              alt="Shoes"
              className="rounded-xl"
              style={{ width: "350px", height: "250px" }} // Increased width of the image
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">REC Cricket Tournament</h2>
            <p>Every year REC Sports club held differnt type of sports tournament.Every year REC Sports club held differnt type of sports tournament.</p>
            <div className="card-actions">
             <Link to="/cricket">
             <button className="btn btn-outline btn-info h-4 w-40">Read More<PiArrowRightLight size="1.1rem" color="blue" /></button>
             </Link>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl mx-4">
          <figure className="px-4 pt-10">
            <img
              src="https://i.ibb.co/pxTDWWp/khela.webp"
              alt="Shoes"
              className="rounded-xl"
              style={{ width: "350px", height: "250px" }} // Increased width of the image
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Programming-Hero Seminar</h2>
            <p>Every year REC Sports club held differnt type of sports tournament.Every year REC Sports club held differnt type of sports tournament.</p>
            <div className="card-actions">
             <Link to="/cricket">
             <button className="btn btn-outline btn-info h-4 w-40">Read More<PiArrowRightLight size="1.1rem" color="blue" /></button>
             </Link>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl mx-4">
          <figure className="px-4 pt-10">
            <img
              src="https://i.ibb.co/pxTDWWp/khela.webp"
              alt="Shoes"
              className="rounded-xl"
              style={{ width: "350px", height: "250px" }} // Increased width of the image
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">REC Cricket Tournament</h2>
            <p>Every year, REC Sports Club hosts diverse sports tournaments. This year, the CSE department emerged as champions, showcasing outstanding teamwork and skill..</p>
            <div className="card-actions">
             <Link to="/cricket">
             <button className="btn btn-outline btn-info h-10 w-40">Read More<PiArrowRightLight size="1.1rem" color="blue" /></button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
