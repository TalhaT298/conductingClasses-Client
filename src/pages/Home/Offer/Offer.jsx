import React from "react";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoLibrarySharp } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiClubhouse } from "react-icons/si";
import { MdEmojiTransportation } from "react-icons/md";
const Offer = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="w-3/5">
          <div className="card-body">
            {/* left side----------- */}
            <div>
              <h3>ggggggggggggggg</h3>
              <p>fgggggggggggggggg</p>
              {/* part two div---------------------------------------------- */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="flex py-4">
                    <p className="pt-2">
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
                    <p className="pt-2">
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
                    <p className="pt-4">
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
                    <p className="pt-4">
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
                    <p className="pt-4">
                      <AiOutlineFileProtect size="4.3rem" color="black" />
                    </p>
                    <h2 className="text-2xl">
                    Transportation <br />
                      <p className="text-sm">
                      To make the student’s life easier and safe, we are providing  buses from different points of Rangpur city to....{" "}
                      </p>
                    </h2>
                  </div>

                  <div className="flex py-4">
                    <p className="pt-4">
                      <AiOutlineFileProtect size="4.3rem" color="black" />
                    </p>
                    <h2 className="text-2xl ">
                      Accommodation <br />
                      <p className="text-sm">
                        We are providing a secure and convenient living facility
                        for our students.{" "}
                      </p>
                    </h2>
                  </div>

                  <div className="flex py-4">
                    <p className="pt-4">
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
                    <p className="pt-4">
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
                </div>
              </div>
              {/* part two div---------------------------------------------- */}
            </div>
            {/* left side----------- */}
          </div>
        </div>

        <div className="w-2/5">
          <figure>
            <img
              src="https://i.ibb.co/DpT467W/Untitled-design-24.png"
              alt="Album"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Offer;
