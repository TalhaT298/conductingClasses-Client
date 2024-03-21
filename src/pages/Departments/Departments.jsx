import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Departments = () => {
  return (
    <div>
      <Link to="/departments">
        <div>
          <SectionTitle
            className="font-serif"
            heading={"Departments"}
          ></SectionTitle>
        </div>
      </Link>
    </div>
  );
};

export default Departments;
