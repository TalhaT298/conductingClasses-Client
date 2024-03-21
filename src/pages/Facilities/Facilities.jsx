import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Facilities = () => {
  return (
    <div>
      <Link to="/facilities">
        {/* -------------------------------------1st start------------------------------------ */}
        <div>
          <section class=" body-font">
            <div class="container px-5 py-24 mx-auto">
              <SectionTitle
                className="font-serif"
                heading={"Facilities"}
                
              ></SectionTitle>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="team"
                      class="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src="https://dummyimage.com/80x80"
                    ></img>
                    <div class="flex-grow ml-8">
                      <h2 class="text-black title-font text-3xl">
                      ICT Center
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="team"
                      class="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src="https://dummyimage.com/84x84"
                    ></img>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-medium">
                        Henry Letham
                      </h2>
                      <p class="text-gray-500">CTO</p>
                    </div>
                  </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="team"
                      class="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src="https://dummyimage.com/88x88"
                    ></img>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-medium">
                        Oskar Blinde
                      </h2>
                      <p class="text-gray-500">Founder</p>
                    </div>
                  </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="team"
                      class="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src="https://dummyimage.com/90x90"
                    ></img>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-medium">
                        John Doe
                      </h2>
                      <p class="text-gray-500">DevOps</p>
                    </div>
                  </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="team"
                      class="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src="https://dummyimage.com/94x94"
                    ></img>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-medium">
                        Martin Eden
                      </h2>
                      <p class="text-gray-500">Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="team"
                      class="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src="https://dummyimage.com/98x98"
                    ></img>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-medium">
                        Boris Kitua
                      </h2>
                      <p class="text-gray-500">UX Researcher</p>
                    </div>
                  </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="team"
                      class="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src="https://dummyimage.com/100x90"
                    ></img>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-medium">
                        Atticus Finch
                      </h2>
                      <p class="text-gray-500">QA Engineer</p>
                    </div>
                  </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="team"
                      class="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src="https://dummyimage.com/104x94"
                    ></img>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-medium">
                        Alper Kamu
                      </h2>
                      <p class="text-gray-500">System</p>
                    </div>
                  </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="team"
                      class="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src="https://dummyimage.com/108x98"
                    ></img>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 title-font font-medium">
                        Rodrigo Monchi
                      </h2>
                      <p class="text-gray-500">Product Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* -------------------------------------1st end------------------------------------ */}
      </Link>
    </div>
  );
};

export default Facilities;
