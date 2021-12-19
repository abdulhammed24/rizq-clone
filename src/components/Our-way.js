import React from "react";
import { ourWayData } from "../data/OurWayData";

const OurWay = () => {
  return (
    <div className="py-20 bg-gray text-blue our-way">
      <div className="w-container-mobile mx-auto my-0 md:w-container-lg">
        <h1 className="text-4xl md:text-h1">Our way</h1>
        <h4 className="text-xl md:text-h4">
          Together, we create wealth by mobilising resources for long-term,
          <br className="hidden lg:block" />
          profitable investments
        </h4>
        <div className="grid grid-cols-2 md:w-container-md mx-auto lg:grid-cols-4 gap-8 mt-14">
          {ourWayData.map((item, index) => (
            <div
              key={index}
              className="min-h-our flex flex-col items-start md:justify-between"
            >
              <img src={item.img} alt={item.alt} />
              <h3 className="text-2xl md:text-h3 mb-1 mt-6">{item.title}</h3>
              <p className="text-p lg:w-11/12">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWay;
