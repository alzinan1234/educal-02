import Image from "next/image";
import React from "react";
import text_bg from "@/image/home/yellow-bg.png";
import teacherImage from "../../image/about/why.png";
import { FaArrowLeft } from "react-icons/fa6";

const Teacher = () => {
  return (
    <>
      <div className="py-10 md:py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 justify-center px-5 md:px-0">
          <div className="flex flex-col gap-5 max-w-lg">
            <p className="text-lg text-blue-600">Why Choose Me</p>
            <h2 className="text-[28px] md:text-[40px] font-bold text-gray-900 relative leading-tight md:leading-snug">
              <Image
                className="absolute bottom-0 md:bottom-[3px] z-[-1] left-[-5px] md:left-[-15px]"
                src={text_bg}
                alt="Background"
                width={180}
                height={40}
              />
              Tools for Teachers <br className="hidden md:block" /> and Learners
              Educal
            </h2>
            <p className="text-gray-600 mb-4 leading-7 md:leading-8 tracking-tighter">
              Oxford chimney pot Eaton faff about blower blatant brilliant,
              bubble and squeak he legged it Charles bonnet arse at public
              school bamboozled.
            </p>
            <div className="flex items-center gap-5">
              <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Join for Free
              </button>
              <div className="flex items-center gap-2">
                <p className="text-gray-700">Learn More</p>
                <FaArrowLeft className="w-5 h-5 text-gray-700" />
              </div>
            </div>
          </div>
          <div className="max-w-xs md:max-w-md w-full">
            <Image
              src={teacherImage}
              alt="Teacher"
              width={450}
              height={350}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher;
