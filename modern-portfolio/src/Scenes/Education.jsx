import React from "react";

const Education = () => {
  return (
    <div id="education" className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="relative mx-auto py-10 max-w-lg">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 flex-col flex justify-between items-center mt-24 transform -translate-x-1/2 w-[2.5px] bg-gray-400 h-3/4">
    <div className="w-3 h-3 bg-yellow rounded-full animate-beat -translate-y-1/2"></div>
    <div className="w-3 h-3 bg-yellow rounded-full animate-beat"></div>
    <div className="w-3 h-3 bg-yellow rounded-full animate-beat translate-y-1/2"></div>
</div>


        {/* 10th Grade */}
        <div className="mb-10 flex items-center">
          {/* <div className="order-1 w-5/12"></div> */}
          <div className="order-1 w-5/12 md:order-2">
            <div className="   text-black flex items-center justify-center font-bold text-lg mx-auto bg-yellow mb-4">
              2016-2020
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-black">
              <h3 className="text-xl font-semibold">BE CIVIL</h3>
              <p>PSR ENGG COLLEGE</p>
              <p>7.3 CGPA</p>
            </div>
          </div>
          {/* <div className="order-1 w-2 md:order-3 md:w-5/12"></div> */}
        </div>

        {/* 12th Grade */}
        <div className="mb-10 flex items-right justify-end  flex-row-reverse md:flex-row ">
          {/* <div className="order-1 w-5/12"></div> */}
          <div className="order-1 w-5/12 md:order-2 ">
            <div className=" bg-blue-500 text-black flex flex-row items-center justify-center bg-yellow font-bold text-lg mx-auto mb-4">
              2016
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-black">
              <h3 className="text-xl font-semibold">HSC</h3>
              <p>NHSS</p>
              <p>59%</p>
            </div>
          </div>
          {/* <div className="order-1 w-2 md:order-3 md:w-5/12"></div> */}
        </div>

        {/* College */}
        <div className="mb-10 flex items-center">
          {/* <div className="order-1 w-5/12"></div> */}
          <div className="order-1 w-5/12 md:order-2 mt-16 ">
            <div className=" bg-yellow text-black flex items-center justify-center font-bold text-lg mx-auto mb-4">
              2014
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-black">
              <h3 className="text-xl font-semibold">SSLC</h3>
              <p>SKHS</p>
              <p>84%</p>
            </div>
          </div>
          {/* <div className="order-1 w-2 md:order-3 md:w-5/12"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Education;
