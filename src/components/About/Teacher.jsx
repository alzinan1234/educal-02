import Image from "next/image";
import React from "react";
import text_bg from "@/image/home/yellow-bg.png";
import teacherImage from "../../image/about/why.png";
import { FaArrowLeft } from "react-icons/fa6";

const Teacher = () => {
  return (
    <>
      <div className="py-20">
        <div className="container flex items-center gap-10 justify-center">
          <div className="flex flex-col gap-5">
            <p className="text-lg text-blue-600">Why Choses Me</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 relative">
              <Image
                className="absolute bottom-0 md:bottom-[3px] z-[-12] left-[-10px] md:left-[-20px] leFadeInLeft"
                src={text_bg}
                alt="Background"
                width={180}
                height={40}
              />
              Tools for Teachers <br className="hidden md:block" /> and Learners
              Educal
            </h2>
            <p className="text-gray-600 mb-4 tracking-tighter w-[400px] leading-8">
              Oxford chimney pot Eaton faff about blower blatant brilliant,
              bubble and squeak he legged it Charles bonnet arse at public
              school bamboozled.
            </p>
            <div className="flex items-center gap-5">
              <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Join for Free
              </button>
              <div className="flex items-center gap-2">
                <p>Learn More</p>
                <p>
                  <FaArrowLeft className="w-5 h-5" />
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={teacherImage} alt="Teacher" width={450} height={350} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher;
