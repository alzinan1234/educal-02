"use client";
import { useEffect } from "react";
import Image from "next/image";
import image1 from "../../image/about/about.jpg"; // Add your actual image path
import image2 from "../../image/about/about-banner.jpg";
import profileS1 from "@/image/about/student-1.jpg"; // Add your actual image path
import profileS2 from "@/image/about/student-2.jpg"; // Add your actual image path
import profileS3 from "@/image/about/student-3.jpg"; // Add your actual image path
import profileS4 from "@/image/about/student-4.jpg"; // Add your actual image path
import text_bg from "@/image/home/yellow-bg.png";

const Goals = () => {
  return (
    <div className="py-10 flex gap-8 items-center">
      {/* Left Section with Images */}
      <div className="flex relative  h-[100%] flex-col justify-end items-center md:w-[50%]">
        <div className="flex flex-col w-[100%] justify-end items-center">
          <Image
            src={image2}
            width={280}
            height={220}
            alt="Banner Image"
            className="rounded-lg flex h-[312px] w-[260px] absolute bottom-[-1px] left-[125px]"
          />
          <div className="flex flex-col justify-end w-[100%] ">
            <div className="flex justify-end">
              <Image
                src={image1}
                width={480}
                height={480}
                alt="Course Image"
                className="rounded-lg w-[480px] h-[530px] "
              />
            </div>
            <div className="profile_content flex justify-end w-[100%]  ">
              <div className="flex flex-col w-[100%] py-3">
                <div className="flex justify-end md:me-32 mx-auto items-center w-[160px] relative h-[50px]">
                  <Image
                    width={40}
                    hight={40}
                    className="rounded-full absolute left-1"
                    src={profileS1}
                    alt=""
                  />
                  <Image
                    width={40}
                    hight={40}
                    className="rounded-full absolute left-[30px] z-10"
                    src={profileS2}
                    alt=""
                  />
                  <Image
                    width={40}
                    hight={40}
                    className="rounded-full absolute left-[60px] z-10"
                    src={profileS3}
                    alt=""
                  />
                  <Image
                    width={40}
                    hight={40}
                    className="rounded-full absolute left-[90px] z-10"
                    src={profileS4}
                    alt=""
                  />
                </div>
                <div className="d ps-4 flex  justify-end md:me-[100px]">
                  <h1 className="font-semibold text-gray-500">
                    join over <b>4.000+</b> student
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Section with Content */}
      <div className="w-full md:w-[50%] h-[100%]">
        <h2 className="text-[40px] font-bold text-gray-900 relative">
          <Image
            className="absolute bottom-[3px] z-[-12] left-[-20px] leFadeInLeft "
            src={text_bg}
            alt="Sliding Image"
          />
          Achieve Your <br className="hidden md:block" /> Goals With Educal
        </h2>
        <p className="text-gray-600 mb-4">
          At EduCal, our mission is to provide high-quality education to our
          students. We strive to create a diverse and inclusive learning
          environment that fosters empathy, understanding, and problem-solving
          skills.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
          <li>Upskill your organization.</li>
          <li>Access more than 100K online courses.</li>
          <li>Learn the latest skills.</li>
        </ul>
        <button className="bg-blue-600 text-white px-6 py-2 border border-blue-600 rounded-lg hover:bg-blue-700 transition duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Goals;
