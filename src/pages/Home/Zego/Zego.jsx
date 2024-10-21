import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import sirs from "../../../assets/tgh.png"
const Zego = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate(`/room/${input}`);
  };

  const { user } = useAuth();

  const handleLoginClick = (e) => {
    if (user) {
      // If the user is already logged in, show a toast message
      toast.success("You are already logged in!");
      e.preventDefault(); // Prevent navigation to the login page
    } else {
      // If the user is not logged in, navigate to the login page
      navigate("/login");
    }
  };


  return (
    <div>
  <SectionTitle
    className="font-serif"
    heading={"Video Conference"}
    // subHeading={"National and International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore opportunities, collaborate and give guidance to the students"}
  ></SectionTitle>
  
  <div className="flex flex-col md:flex-row">
    {/* <!-- Right Div (60%) --> */}
    <div className="md:w-3/5 w-full  p-4">
      <img src={sirs} alt="" className="w-full h-auto" />
    </div>

    {/* <!-- Left Div (40%) --> */}
    <div className="md:w-2/5 w-full p-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter your name"
        className="w-full p-2 border   rounded"
      />
      <button
        className="btn mt-2 w-full md:w-auto bg-sky-600 text-white hover:text-black rounded"
        onClick={submitHandler}
      >
        Join
      </button>
      <Link
        to="/login"
        className="btn mt-2 w-full md:w-auto text-gray-700 hover:text-blue-950 rounded md:ml-5"
        onClick={handleLoginClick}
      >
        Login
      </Link>
    </div>
  </div>
</div>

  );
};

export default Zego;
