import React from "react";
import { motion } from "framer-motion"
import sh1 from "../../../assets/sh5.webp";
import sh2 from "../../../assets/sh2.webp";
// import sh7 from "../../../assets/sh7.webp";
import sh8 from "../../../assets/sh8.webp";
import sh3 from "../../../assets/sh3.webp";
const Scholarship = () => {
  return (
    <div class="max-w-[1200px] mx-auto">
      <div class="flex justify-center">
        <div class="flex justify-center items-center">
          <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} class="w-[310px]" src={sh1} alt="" />
          <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} class="w-[310px]" src={sh2} alt="" />
          <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} class="w-[310px]" src={sh8} alt="" />
          {/* <!-- <img class="w-[320px]" src={sh7} alt="" /> --> */}
          <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} class="w-[310px]" src={sh3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
