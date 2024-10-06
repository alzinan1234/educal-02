import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const SectionTitle = () => {
  return (
    <div
      className=" container mt-10 mb-10"
      data-aos="zoom-in-right"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-6xl font-bold">
            Explore <br />
            Our Popular Courses
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-red-700">View All Category</p>
          <span>
            <FaArrowRightLong className="w-5 h-5 text-red-700" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
