import React from "react";
import bg1 from "../../image/home/banner-bg-1.jpg";
import bg2 from "../../image/home/banner-bg-2.jpg";
import banner1 from "../../image/home/banner-img-1.png";
import banner2 from "../../image/home/banner-img-2.png";
import Image from "next/image";

const OtherBanner = () => {
  return (
    <>
      <div className="mt-16 mb-16">
        <div className="container mx-auto flex flex-col lg:flex-row gap-5 px-5 ">
          {/* First Banner */}
          <div
            style={{
              backgroundImage: `url(${bg1.src})`, // Use bg1.src to get the correct image path
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "280px",
              position: "relative",
              overflow: "hidden",
            }}
            className="flex flex-col lg:flex-row justify-between items-center p-8 lg:p-14 rounded-lg w-full lg:w-1/2"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="flex flex-col gap-3 lg:gap-5 text-center lg:text-left">
              <button className="bg-pink-600 w-[70px] text-white px-1 py-1 rounded-3xl hover:bg-blue-700 transition duration-300">
                Free
              </button>
              <h1 className="text-xl lg:text-2xl font-bold hover:text-blue-600 transition-all duration-300">
                Germany Foundation Document
              </h1>
              <button className="bg-blue-800 w-[140px] lg:w-[160px] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                View Course
              </button>
            </div>
            <div className="w-[250px] lg:w-[400px] mt-5 lg:mt-0">
              <Image
                className="rounded-b-3xl rounded-ss-3xl"
                src={banner1}
                alt="Banner Image"
              />
            </div>
          </div>

          {/* Second Banner */}
          <div
            style={{
              backgroundImage: `url(${bg2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "280px",
              position: "relative",
              overflow: "hidden",
            }}
            className="flex flex-col lg:flex-row justify-between items-center p-8 lg:p-14 rounded-lg w-full lg:w-1/2"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="flex flex-col gap-3 lg:gap-5 text-center lg:text-left">
              <button className="bg-orange-700 w-[70px] text-white px-1 py-1 rounded-3xl hover:bg-blue-700 transition duration-300">
                Free
              </button>
              <h1 className="text-xl lg:text-2xl font-bold hover:text-blue-600 transition-all duration-300">
                Germany Foundation Document
              </h1>
              <button className="bg-blue-800 w-[140px] lg:w-[160px] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                View Course
              </button>
            </div>
            <div className="w-[250px] lg:w-[400px] mt-5 lg:mt-0">
              <Image
                className="rounded-b-3xl rounded-ss-3xl"
                src={banner2}
                alt="Banner Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherBanner;
