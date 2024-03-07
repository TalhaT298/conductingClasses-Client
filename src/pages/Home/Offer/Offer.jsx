import React, { useState } from "react";
import { motion } from "framer-motion"
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoLibrarySharp } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiClubhouse } from "react-icons/si";
import { MdEmojiTransportation } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { SiHelpdesk } from "react-icons/si";
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
const Offer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  return (
    <div>
      <div className="card lg:card-side bg-base-100  ">
        <div className="w-3/5">
        <div className="pb-4">
            <h3 className="text-4xl uppercase border-y-2 py-2 font-bold">What We Offer</h3>
              <p className="pt-4 font-bold">At Rangpur Engineering College, students get the opportunity to think, learn and grow.</p>
            </div>
          <div className="card-body">
            
            {/* left side----------- */}
            <div>
            
              {/* part two div---------------------------------------------- */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="flex py-4">
                    <p className="pt-2 pr-2">
                      <AiOutlineFileProtect size="4.3rem" color="black" />
                    </p>
                    <h2 className="text-2xl">
                      Accommodation <br />
                      <p className="text-sm">
                        We are providing a secure and convenient living facility
                        for our students.{" "}
                      </p>
                    </h2>
                  </div>

                  <div className="flex py-4">
                    <p className="pt-2 pr-2">
                      <IoLibrarySharp size="4.3rem" color="black" />
                    </p>
                    <h2 className="text-2xl">
                    Library <br />
                      <p className="text-sm">
                      RIC library has a collection of over 50000 books, journals, and research papers, enriching the resources day by day.{" "}
                      </p>
                    </h2>
                  </div>

                  <div className="flex py-4">
                    <p className="pt-4 pr-2">
                      <BsFillPersonLinesFill size="4.3rem" color="black" />
                    </p>
                    <h2 className="text-2xl">
                    Blended Learning <br />Platform <br />
                      <p className="text-sm">
                      To engage students in learning after face-to-face classes, our faculty members and students collaborate in the online..{" "}
                      </p>
                    </h2>
                  </div>

                  <div className="flex py-4">
                    <p className="pt-4 pr-2">
                      <SiClubhouse size="4.3rem" color="black" />
                    </p>
                    <h2 className="text-2xl">
                      REC Learniverse <br />
                      <p className="text-sm">
                      Our motto, "Let's Craft Futures Together," drives knowledge sharing and collaborative learning.{" "}
                      </p>
                    </h2>
                  </div>
                </div>
                {/* another ----------------------------------------------------------------------------*/}
                <div className="w-1/2">
                  <div className="flex py-4">
                    <p className="pt-4 pr-2">
                      <MdEmojiTransportation size="4.3rem" color="black" />
                    </p>
                    <h2 className="text-2xl">
                    Transportation <br />
                      <p className="text-sm">
                      To make the student’s life easier and safe, we are providing  buses from different points of Rangpur city to....{" "}
                      </p>
                    </h2>
                  </div>

                  <div className="flex py-4">
                    <p className="pt-4 pr-2">
                      <FaLaptopCode size="4.3rem" color="black" />
                    </p>
                    <h2 className="text-2xl ">
                      One student one laptop <br />
                      <p className="text-sm">
                        Under the ‘One student one laptop’ project.REC has distributed over 500 f..{" "}
                      </p>
                    </h2>
                  </div>

                  <div className="flex py-4">
                    <p className="pt-4 pr-2">
                      <MdOutlineSportsGymnastics size="4.3rem" color="black" />
                    </p>
                    <h2 className="text-2xl">
                     Sports Club <br />
                      <p className="text-sm">
                        To ensure the mental and physical well-being of our students and employees, we are providing a well-equipped sports club.{" "}
                      </p>
                    </h2>
                  </div>

                  <div className="flex py-8">
                    <p className="pt- pr-2">
                      <SiHelpdesk size="4.3rem" color="black" />
                    </p>
                    <h2 className="text-2xl">
                    Helpdesk<br />
                      <p className="text-sm">
                      We offer continuous support to our students, day and night{" "}
                      </p>
                    </h2>
                  </div>
                </div>
              </div>
              {/* part two div---------------------------------------------- */}
            </div>
            {/* left side----------- */}
          </div>
        </div>

        <div className="w-2/5">
          <figure>
          <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
            <img
              src="https://i.ibb.co/DpT467W/Untitled-design-24.png"
              alt="Album"
              onLoad={handleImageLoad}
            />
            </motion.div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Offer;
