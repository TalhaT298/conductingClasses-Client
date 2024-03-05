import React from "react";
import { motion } from "framer-motion"
import sh1 from "../../../assets/sh5.webp";
import sh2 from "../../../assets/sh2.webp";
import sh8 from "../../../assets/sh8.webp";
import sh3 from "../../../assets/sh3.webp";

const Scholarship = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center items-center">
          <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="w-full md:w-1/2 lg:w-1/4 p-2" src={sh1} alt="" />
          <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="w-full md:w-1/2 lg:w-1/4 p-2" src={sh2} alt="" />
          <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="w-full md:w-1/2 lg:w-1/4 p-2" src={sh8} alt="" />
          <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="w-full md:w-1/2 lg:w-1/4 p-2" src={sh3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
