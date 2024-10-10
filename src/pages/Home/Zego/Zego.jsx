import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Zego = () => {
  const [input, setInput] = useState("");
  const navigate=useNavigate();
  const submitHandler=()=>{
    navigate(`/room/${input}`)
  }
  return (
    <div>
      <SectionTitle
        className="font-serif"
        heading={"Video Conference"}
        // subHeading={"National and International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore opportunities, collaborate and give guidance to the students"}
      ></SectionTitle>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter your namee"
        />
        <button onClick={submitHandler}>Join</button>
      </div>
    </div>
  );
};

export default Zego;
