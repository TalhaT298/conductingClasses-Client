import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const RecentEvents = () => {
  return (
    <div>
      <SectionTitle
        heading={"Recent Events"}
        // subHeading={"National and International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore opportunities, collaborate and give guidance to the students"}
      ></SectionTitle>
      <div className="flex justify-center item-center">
        <div className="card  bg-base-100 shadow-xl mx-4">
          <figure className="px-10 pt-10">
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
              style={{ width: "300px", height: "200px" }} // Adjust width and height as needed
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl mx-4">
          <figure className="px-10 pt-10">
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
              style={{ width: "300px", height: "200px" }} // Adjust width and height as needed
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
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
            <p>Every year REC Sports club held differnt type of sports tournament.Every year REC Sports club held differnt type of sports tournament.</p>
            <div className="card-actions">
             <Link>
             <button className="btn btn-primary h-8 w-24">Buy Now</button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
