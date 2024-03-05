import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Faculties = () => {
  return (
    <div>
      <SectionTitle
        heading={"Faculties"}
        // subHeading={"National and International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore opportunities, collaborate and give guidance to the students"}
      ></SectionTitle>
      <div>
        <p>
          To help you build your career and accomplish your goal, we are
          offering 38 undergraduate and master's programs under 4 faculties.
        </p>
      </div>
      <div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/200x200"
                ></img>
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Computer Science & Engineering
                  </h2>
                  <p className="mb-4">
                    The Computer Science & Engineering department at REC is at
                    the forefront of research in areas such as artificial
                    intelligence (AI),machine learning,cybersecurity, and
                    software engineering.Our researchers are dedicated to the
                    development of algorithms, systems, and applications that
                    can transform industries and improve the quality of life.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/201x201"
                ></img>
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Electrical & Electronic Engineering
                  </h2>
                  <p className="mb-4">
                    Our Electrical & Electronic Engineering research teams are
                    pioneering new frontiers in areas such as power systems,
                    renewable energy, electronic devices, and control systems.
                    We are committed to creating energy-efficient solutions,
                    advancing semiconductor technologies, and developing
                    sophisticated control systems to promote a more sustainable
                    and technologically advanced society.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/202x202"
                ></img>
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Civil Engineering
                  </h2>

                  <p className="mb-4">
                    Our Civil Engineering department carries out groundbreaking
                    research in areas such as sustainable construction
                    materials, structural health monitoring, and environmental
                    engineering. Our faculty and students collaborate to develop
                    new materials, designs, and methods that contribute to safe,
                    durable, and environmentally friendly infrastructures.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/203x203"
                ></img>
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Information & Communication Engineering
                  </h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <p className="mb-4">
                    In the Information & Communication Engineering department,
                    our research efforts are primarily focused on data science,
                    wireless communication, network security, and Internet of
                    Things (IoT). We aspire to create robust and innovative
                    solutions to address the challenges posed by the ever-
                    evolving landscape of digital communication and information
                    processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculties;
