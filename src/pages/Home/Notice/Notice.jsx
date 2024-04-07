import React, { useState } from "react";
import { PiArrowRightLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
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
      month: "ok",
    },
    {
      title: "Title 3",
      description:
        "Description for accordion 1 Description for accordion 1 Description for accordion 1",
      date: "12,",
      month: "ok",
    },
    {
      title: "Admission Notice for Ph.D.",
      description:
        "Admission Notice for M.Phil. and Ph.D. Programs in the departments affiliated with Rajshahi University for the academic year 2024-2025.",
      date: "03",
      month: "March",
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
    <div className="">
      <SectionTitle
        className="font-serif"
        heading={"Notice"}
        // subHeading={"National and International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore opportunities, collaborate and give guidance to the students"}
      ></SectionTitle>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center">
        {/* className="flex flex-col md:flex-row md:flex-wrap justify-center items-center" */}
        <div className="lg:w-1/2">
          {/* <div className="flex">
          <h3 className="text-3xl uppercase border-y-2 py-2 font-bold">
            Notice
          </h3>
          <div className="pl-[450px] pt-4">
            <SlCalender size="1.3rem" color="black" />
          </div>
        </div> */}
          {/* 1 */}
          <div className="">
            <div className="collapse collapse-arrow bg-base-100 mb-4">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
              ভর্তি পরীক্ষার আবেদনের সময়সীমা :
              </div>
              <div className="collapse-content">
                <p> ১৭/০৪/২০২৪ তারিখ দুপুর ১২.০০ টা থেকে ২০/০৫/২০২৪ তারিখ রাত ১২.০০ টা পর্যন্ত।</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 mb-4">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
              আবেদন ফি:
              </div>
              <div className="collapse-content">
                <p>৬৬০/- টাকা (সার্ভিস চার্জ সহ) অনলাইনে পরিশোধ করতে হবে।</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 mb-4">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium mb-4">
              প্রশ্ন এবং উত্তর:
              </div>
              <div className="collapse-content">
                <p>ইংরেজি প্রশ্নপত্রে ভর্তি পরীক্ষা দিতে ইচ্ছুক প্রার্থীকে অনলাইনে আবেদনের সময় প্রশ্নপত্রের ভাষা হিসেবে ইংরেজি নির্বাচন করতে হবে।</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
              ভর্তি সংক্রান্ত নোটিশ ও অন্যান্য তথ্য:
              </div>
              <div className="collapse-content">
                <p>	ভর্তি সংক্রান্ত নোটিশ ও অন্যান্য তথ্য <a href="https://admission.ru.ac.bd/">admission.ru.ac.bd</a> সাইটে পাওয়া যাবে।</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd part right side gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg*/}
        <div className="lg:w-1/2">
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
          {/* <div className="flex">
          <h3 className="text-3xl uppercase border-y-2 py- font-bold">
            Notice
          </h3>
          <div className="pl-[450px] pt-4">
            <SlCalender size="1.3rem" color="black" />
          </div>
        </div> */}
          {/* -------------shuru */}
          <div className="flex justify-center ">
            <div className="max-w-[800px] rounded py-10 space-y-6 cursor-pointer">
              {accordionData.map((accordion, idx) => (
                <div
                  key={idx}
                  onClick={() => handleToggle(idx)}
                  className="flex items-center"
                >
                  {/* Index div */}
                  <div className="w-16 h-16 bg-[#000000] flex justify-center items-center text-white text-2xl font-semibold rounded font-sans">
                    <div class="flex flex-col items-center">
                      <span class="text-xl">{accordion.date}</span>
                      <p class="mt-1 text-xs">{accordion.month}</p>
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="w-10 h-[2px] bg-[#000000] relative">
                    <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-[#000000]"></span>
                    <span className="bg-[#000000] w-16 h-1"></span>
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
                      className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
                        isOpen[idx]
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="max-w-[600px] rounded-br-xl rounded-bl-xl bg-[#000000] text-white p-6 text-center text-sm">
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
    </div>
  );
};

export default Notice;
