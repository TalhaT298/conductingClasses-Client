import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const CSE = () => {
  return (
    <div>
      <Link to="/cse">
        <div className="py-20">
          <div className="mockup-browser border bg-base-300">
            <div className="mockup-browser-toolbar">
              <div className="input">https://cse.com</div>
            </div>
            {/* <div className="flex justify-center px-4 py-16 bg-base-200">
              Hello!
            </div> */}
          </div>
          {/* <SectionTitle
            className="font-serif"
            heading={"Computer Science & Engineering"}
            // subHeading={"National and International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore opportunities, collaborate and give guidance to the students"}
          ></SectionTitle> */}
          <div className='mx-auto md:w-8/12 my-8 flex justify-center items-center '>
           {/* <p className='text-yellow-600'>----{subHeading}---</p> */}
           <h3 className='text-4xl uppercase border-y-2 py-4 font-bold font-serif'>Computer Science & Engineering</h3> 
          
        </div>
        </div>
        <div></div>
      </Link>
    </div>
  );
};

export default CSE;
