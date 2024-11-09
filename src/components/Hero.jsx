import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col sm:flex-row border border-gray-700">
      {/* hero left */}
      <div className=" flex items-center justify-center w-full sm:w-1/2 py-10 sm:py-0">
        <div className=" text-gray-950">
          <div className=" flex items-center gap-2">
            <p className=" w-8 sm:w-11 h-[2px] bg-gray-950"></p>
            <p className=" font-medium text-sm md:text-base text-gray-950">
              OUR BESTSELLERS
            </p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className=" flex items-center gap-2">
            <p className=" font-semibold text-sm md:text-base text-gray-950">
              SHOP NOW
            </p>
            <p className=" w-8 sm:w-11 h-[1.5px] bg-gray-950"></p>
          </div>
        </div>
      </div>
      <img src="imges/hero_img.png" alt="" className=" w-full sm:w-1/2"/>
    </div>
  );
};

export default Hero;
