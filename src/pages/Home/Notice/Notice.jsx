import React, { useState } from "react";
import { PiArrowRightLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
const Notice = () => {
  const accordionData = [
    {
      title: "Title 1",
      description:
        "Description for accordion 1 Description for accordion 1 Description for accordion 1 ",
      date: "12",
      month: "ok",
    },
    {
      title: "Title 2",
      description:
        "Description for accordion 1 Description for accordion 1 Description for accordion 1",
      date: "12,",
    },
    {
      title: "Title 3",
      description:
        "Description for accordion 1 Description for accordion 1 Description for accordion 1",
      date: "12,",
    },
    {
      title: "Title 4",
      description:
        "Description for accordion 1 Description for accordion 1 Description for accordion 1",
      date: "12,",
    },
  ];

  const [isOpen, setIsOpen] = useState(Array(accordionData.length).fill(false)); // Initialize isOpen state for each accordion

  const handleToggle = (idx) => {
    setIsOpen((prevState) => {
      const newState = [...prevState]; // Create a copy of state array
      newState[idx] = !newState[idx]; // Toggle the state of the clicked accordion
      return newState;
    });
  };
  return (
    <div className="flex pt-6">
      <div className="w-1/2">
        <div className="flex">
          <h3 className="text-3xl uppercase border-y-2 py-2 font-bold">
            Notice
          </h3>
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
              Admission notice for M.Phil. and Ph.D. programs at Rajshahi
              University for 2024-2025.
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
          <h3 className="text-3xl uppercase border-y-2 py- font-bold">
            Notice
          </h3>
          <div className="pl-[450px] pt-4">
            <SlCalender size="1.3rem" color="black" />
          </div>
        </div>
        {/* -------------shuru */}
        <div className="flex justify-center ">
          <div className="max-w-[800px] rounded-lg py-10 space-y-6 cursor-pointer">
            {accordionData.map((accordion, idx) => (
              <div
                key={idx}
                onClick={() => handleToggle(idx)}
                className="flex items-center"
              >
                {/* Index div */}
                <div className="w-16 h-16 bg-[#000000] flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
                  <div class="flex flex-col items-center">
                    <span class="text-xs">{accordion.date}</span>
                    <p class="mt-1 text-sm">{accordion.month}</p>
                  </div>
                </div>
                {/* Divider */}
                <div className="w-10 h-[2px] bg-[#000000] relative">
                  <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-[#000000]"></span>
                  <span className="bg-[#000000] w-10 h-1"></span>
                </div>
                {/* Main accordion content */}
                <div>
                  <div className="max-w-[600px] bg-white shadow-md border-t-[12px] p-3 border-[#000000] relative">
                    <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-[#000000] absolute top-0 right-0"></span>
                    <h1 className="text-[#000000] text-xl text-center">
                      {accordion.title}
                    </h1>
                  </div>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${
                      isOpen[idx]
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="max-w-[600px] rounded-br-xl rounded-bl-xl bg-[#355E72] text-white p-6 text-center text-sm">
                        {accordion.description}
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
