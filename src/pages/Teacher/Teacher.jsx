import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import kaniz from "../../assets/Kanij Rabeya Nancy.jpeg";
import Dipto from "../../assets/Dipto.jpg";
import Khalid from "../../assets/Khalid.jpg";
import Jhanajay from "../../assets/Jnananjan Roy.webp";
import tariq from "../../assets/photo - Tarikul Islam.jpg";
import polas from "../../assets/polas.jpg";
import naz from "../../assets/MD. NAZMUL HASSAN.jpg";
import nas from "../../assets/MdNasimHaidar.jpeg";
import gol from "../../assets/Golam Md. Al Shamim.jpg";
const Teacher = () => {
  return (
    <div>
      <Link to="/teacher"></Link>
        {/* --------------------------------1st section start------------------- */}
        <section class="text-black body-font">
          <div class="container px-5 py-12 mx-auto">
            <SectionTitle
              className="font-serif"
              heading={"Teacher"}
              // subHeading={"National and International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore opportunities, collaborate and give guidance to the students"}
            ></SectionTitle>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class=" text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Md. Khalid Hossen
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(AIUB)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Dipanjan Das Dipto
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(SUST)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Jnananjan Roy
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Kanij Rabeya Nancy
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={Khalid}
                    alt="content"
                  ></img>
                  <h3 class=" text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Md. Khalid Hossen
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <a href="https://www.facebook.com/khalid.hasan.77128261?mibextid=ZbWKwL">
                        <FaFacebookF
                          href="https://www.facebook.com/khalid.hasan.77128261?mibextid=ZbWKwL"
                          size="1.7rem"
                          color="black"
                        />
                      </a>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={Dipto}
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(AIUB)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Dipanjan Das Dipto
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="https://www.facebook.com/Dipto93?mibextid=ZbWKwL">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={Jhanajay}
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(SUST)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Jnananjan Roy
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="https://www.facebook.com/profile.php?id=100000580366774&mibextid=JRoKGi">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={kaniz}
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Kanij Rabeya Nancy
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="https://www.facebook.com/profile.php?id=100012102336348">
                        <a
                          href="https://www.facebook.com/profile.php?id=100012102336348"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebookF
                            href="https://www.facebook.com/profile.php?id=100012102336348"
                            size="1.7rem"
                            color="black"
                          />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-52 rounded w-full object-cover object-center mb-6"
                    src={tariq}
                    alt="content"
                  ></img>
                  <h3 class=" text-black text-xs font-medium title-font">
                  Lecturer,B.Sc. in CSE(PUST)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Md.Tarikul Islam 
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                       
                        <a href="https://www.facebook.com/profile.php?id=100005048774896">
                          <FaFacebookF href="https://www.facebook.com/profile.php?id=100005048774896" size="1.7rem" color="black" />
                        </a>
                      
                        </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-52 rounded w-full object-cover object-center mb-6"
                  src={polas}
                  alt="content"
                ></img>
                <h3 class=" text-black text-xs font-medium title-font">
                  Lecturer,B.Sc. in RECR(RU)
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Polas chandra roy
                </h2>
                <div className="grid grid-flow-col gap-3">
                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <a href="https://www.facebook.com/polas.roy.9?mibextid=kFxxJD">
                      <FaFacebookF
                        href="https://www.facebook.com/polas.roy.9?mibextid=kFxxJD"
                        size="1.7rem"
                        color="black"
                      />
                    </a>
                  </motion.div>

                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <FaInstagram size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>

                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <FaLinkedinIn size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>

                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <FaWhatsapp size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>
                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <BiLogoGmail size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-52 rounded w-full object-cover object-center mb-6"
                  src={naz}
                  alt="content"
                ></img>
                <h3 class="tracking-widest text-black text-xs font-medium title-font">
                  Lecturer,B.Sc. in EEE(RU)
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Md. Nazmul Hassan
                </h2>
                <div className="grid grid-flow-col gap-3">
                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <a href="https://www.facebook.com/nazmul.119?mibextid=ZbWKwL">
                      <FaFacebookF
                        href="https://www.facebook.com/nazmul.119?mibextid=ZbWKwL"
                        size="1.7rem"
                        color="black"
                      />
                    </a>
                  </motion.div>

                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <FaInstagram size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>

                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <FaLinkedinIn size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>

                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <FaWhatsapp size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>
                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <BiLogoGmail size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-52 rounded w-full object-cover object-center mb-6"
                  src={gol}
                  alt="content"
                ></img>
                <h3 class="tracking-widest text-black text-xs font-medium title-font">
                  Lecturer,B.Sc. in EEE(RU)
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Golam Md. Al Shamim 
                </h2>
                <div className="grid grid-flow-col gap-3">
                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                     
                      <a href="https://www.facebook.com/GolamMdAlShamim?mibextid=ZbWKwL">
                        <FaFacebookF href="https://www.facebook.com/GolamMdAlShamim?mibextid=ZbWKwL" size="1.7rem" color="black" />
                      </a>
                     
                  </motion.div>

                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <FaInstagram size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>

                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <FaLinkedinIn size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>

                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <FaWhatsapp size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>
                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <BiLogoGmail size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            </div>
            {/* line---------------------------------- */}
            <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-52 rounded w-full object-cover object-center mb-6"
                  src={nas}
                  alt="content"
                ></img>
                <h3 class=" text-black text-xs font-medium title-font">
                Lecturer,B.Sc. in EEE(RU)
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Md. Nasim Haidar
                </h2>
                <div className="grid grid-flow-col gap-3">
                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <a href="https://www.facebook.com/nasim.haidar.16">
                      <FaFacebookF
                        href="https://www.facebook.com/nasim.haidar.16"
                        size="1.7rem"
                        color="black"
                      />
                    </a>
                  </motion.div>

                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <FaInstagram size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>

                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <FaLinkedinIn size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>

                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <FaWhatsapp size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>
                  <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                    <Link to="">
                      <a href="">
                        <BiLogoGmail size="1.7rem" color="black" />
                      </a>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(AIUB)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Dipanjan Das Dipto
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(SUST)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Jnananjan Roy
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Kanij Rabeya Nancy
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class=" text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Md. Khalid Hossen
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(AIUB)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Dipanjan Das Dipto
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(SUST)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Jnananjan Roy
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Kanij Rabeya Nancy
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class=" text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Md. Khalid Hossen
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(AIUB)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Dipanjan Das Dipto
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(SUST)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Jnananjan Roy
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  ></img>
                  <h3 class="tracking-widest text-black text-xs font-medium title-font">
                    Lecturer,B.Sc. in CSE(RU)
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Kanij Rabeya Nancy
                  </h2>
                  <div className="grid grid-flow-col gap-3">
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaFacebookF size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaInstagram size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaLinkedinIn size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>

                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <FaWhatsapp size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                      <Link to="">
                        <a href="">
                          <BiLogoGmail size="1.7rem" color="black" />
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --------------------------------1st section end------------------- */}
      
    </div>
  );
};

export default Teacher;
