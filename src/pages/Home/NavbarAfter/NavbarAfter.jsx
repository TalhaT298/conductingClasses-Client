import React from "react";
import Marquee from "react-fast-marquee";

const NavbarAfter = () => {
  return (
    <div className="pt-16">
      <div>
        <div className="bg-black flex">
          <div className="w-3/5">
          <Marquee className="flex text-white ">
            <p className="pr-4"> Admissions are open</p>
            <p className="pr-4">Call:+88-0521-54407, +8801855979496</p>
            <p className="pr-4">REC 04 Research Seminar</p>
            <p>CSE ICE CE EEE</p>
          </Marquee>
          </div>
          <div className="w-2/5 flex text-white justify-end gap-4">
            <p>Faculties</p>
            <p>Departments</p>
            <p>Teachers</p>
            <p>Students</p>
            <p>Alumni</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAfter;
