import React from "react";
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
          <img class="w-[320px]" src={sh1} alt="" />
          <img class="w-[320px]" src={sh2} alt="" />
          <img class="w-[320px]" src={sh8} alt="" />
          {/* <!-- <img class="w-[320px]" src={sh7} alt="" /> --> */}
          <img class="w-[320px]" src={sh3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
