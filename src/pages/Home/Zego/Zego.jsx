import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Zego = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate(`/room/${input}`);
  };
  return (
    <div>
      <SectionTitle
        className="font-serif"
        heading={"Video Conference"}
        // subHeading={"National and International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore opportunities, collaborate and give guidance to the students"}
      ></SectionTitle>
      <div class="flex">
        {/* <!-- Left Div (40%) --> */}
        <div class="w-2/5 bg-gray-200 p-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter your name"
            class="w-full p-2 border border-gray-300 rounded"
          />
          <button
            class="mt-2 p-2 bg-blue-500 text-white rounded"
            onClick={submitHandler}
          >
            Join
          </button>
        </div>

        {/* <!-- Right Div (60%) --> */}
        <div class="w-3/5 bg-gray-100 p-4"></div>
      </div>
    </div>
  );
};

export default Zego;
