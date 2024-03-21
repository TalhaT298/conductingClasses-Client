import React, { useState } from "react";
import { PiArrowRightLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
const Notice = () => {
  const array=[1,2,3,4]

    // toggle state and function 
    const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  return (
    <div className="flex pt-6">
      <div className="w-1/2">
        <div className="flex">
          <h3 className="text-3xl uppercase border-y-2 py-2 font-bold">Notice</h3>
          <div className="pl-[450px] pt-4">
            <SlCalender size="1.3rem" color="black" />
          </div>
        </div>
        {/* 1 */}
        <div className="py-2">
          <div class="flex items-center">
            <button class="bg-gray-200 p-2 rounded w-24 h-20">
              <span class="text-3xl">18</span> <br />
              <span class="text-xs">Feb 2024</span>
            </button>
            <p class="pl-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, sed.hjjbbjbjbjbj
            </p>
            <Link to="">
              <p className="pt-12 pr-16">
                <PiArrowRightLight size="1.3rem" color="black" />
              </p>
            </Link>
          </div>
          {/* <p className="pl-[480px]">read more</p> */}
          <p className="border-b-4 pt-2 w-[580px]"></p>
        </div>

        <div className="">
          <div class="flex items-center">
            <button class="bg-gray-200 p-2 rounded w-24 h-20">
              <span class="text-3xl">18</span> <br />
              <span class="text-xs">Feb 2024</span>
            </button>
            <p class="pl-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, sed.hjjbbjbjbjbj
            </p>
            <Link to="">
              <p className="pt-12 pr-16">
                <PiArrowRightLight size="1.3rem" color="black" />
              </p>
            </Link>
          </div>
          {/* <p className="pl-[480px]">read more</p> */}
          <p className="border-b-4 pt-2 w-[580px]"></p>
        </div>

        <div className="">
          <div class="flex items-center">
            <button class="bg-gray-200 p-2 rounded w-24 h-20">
              <span class="text-3xl">18</span> <br />
              <span class="text-xs">Feb 2024</span>
            </button>
            <p class="pl-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, sed.hjjbbjbjbjbj
            </p>
            <Link to="">
              <p className="pt-12 pr-16">
                <PiArrowRightLight size="1.3rem" color="black" />
              </p>
            </Link>
          </div>
          {/* <p className="pl-[480px]">read more</p> */}
          <p className="border-b-4 pt-2 w-[580px]"></p>
        </div>

        <div className="">
          <div class="flex items-center">
            <button class="bg-gray-200 p-2 rounded w-24 h-20">
              <span class="text-3xl">24</span> <br />
              <span class="text-xs">March 2024</span>
            </button>
            <p class="pl-4">
            Admission notice for M.Phil. and Ph.D. programs at Rajshahi University for 2024-2025.
            </p>
            <Link to="">
              <p className="pt-12 pr-16">
                <PiArrowRightLight size="1.3rem" color="black" />
              </p>
            </Link>
          </div>
          {/* <p className="pl-[480px]">read more</p> */}
          <p className="border-b-4 pt-2 w-[580px]"></p>
        </div>
      </div>

      {/* 2nd part right side gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg*/}
      <div className="w-1/2">
        {/* <div className="flex ">
          <h3 className="text-3xl uppercase border-y-2 py-2 font-bold">
          Keydates
          </h3>
          <div className="pl-72 pt-4">
            <button className="btn btn-sm btn-outline btn-info w-20">
            View All
          </button>
            <div className="group">
              <button class="btn rounded btn-outline btn-sm w-20 bg-black text-white border-black border hover:bg-white hover:text-black">
              View All
              </button>
            </div>
          </div>
        </div> */}
        <div className="flex">
          <h3 className="text-3xl uppercase border-y-2 py- font-bold">Notice</h3>
          <div className="pl-[450px] pt-4">
            <SlCalender size="1.3rem" color="black" />
          </div>
        </div>
        {/* -------------shuru */}
        <div className="flex justify-center">
                <div className=" max-w-[550px] rounded-lg py-10 space-y-6 cursor-pointer">
                    {/* maping each accordion  */}
                    {array.map((arr, idx) => (
                        <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center">
                            {/* the index div  */}
                            <div className="w-16 h-16 bg-[#355E72] flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
                                <span>0{idx + 1}</span>
                            </div>
                            <div className="w-10 h-[2px] bg-[#355E72] relative">
                                <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-[#355E72]"></span>
                                <span className="bg-[#355E72] w-10 h-1"></span>
                            </div>
                            {/* main accordion div  */}
                            <div>
                                <div className="max-w-[450px] bg-sky-50 shadow-md border-t-[12px] p-3 border-[#355E72] relative">
                                    <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-[#355E72] absolute top-0 right-0"></span>
                                    <h1 className="text-[#355E72] text-xl text-center">This is my title</h1>
                                </div>
                                <div
                                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${
                                        isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className=" max-w-[450px] rounded-br-xl rounded-bl-xl bg-[#355E72] text-white p-6 text-center text-sm">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nam ipsam sint illo odio sed voluptates suscipit, rerum esse ratione non alias obcaecati
                                            error harum nesciunt. Vitae optio commodi illum!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </div>
    </div>
  );
};

export default Notice;
