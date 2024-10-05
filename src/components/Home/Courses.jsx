import Image from "next/image";
import React from "react";
import dataScienceImg from "../../image/home/data-science.png";
import business from "../../image/home/business-image_3655046.jpg";
import art from "../../image/home/art.jpeg";
import lifestyle from "../../image/home/lifestyle-logo-png.png";
import markiting from "../../image/home/markiting.jpg";
import Finance from "../../image/home/Finance.webp";
import fitness from "../../image/home/fitness.webp";
import Music from "../../image/home/Music_logo.png";
import academic from "../../image/home/academic.webp";

const Courses = () => {
  const courses = [
    {
      id: 1,
      image: dataScienceImg,
      title: "Data Science",
      description: "Data is Everything",
    },
    {
      id: 2,
      image: business,
      title: "Business",
      description: "Improve Your Business",
    },
    {
      id: 3,
      image: art,
      title: "Art & Design",
      description: "Fun & Challenging",
    },
    {
      id: 4,
      image: lifestyle,
      title: "Lifestyle",
      description: "New Skills, New You",
    },
    {
      id: 5,
      image: markiting,
      title: "Marketing",
      description: "Improve your business",
    },
    {
      id: 6,
      image: Finance,
      title: "Finance",
      description: "Fun & Challenging",
    },
    {
      id: 7,
      image: fitness,
      title: "Fitness",
      description: "Invest in Your Body",
    },
    {
      id: 8,
      image: Music,
      title: "Music",
      description: "Major or Minor",
    },
    {
      id: 9,
      image: academic,
      title: "Academics",
      description: "High Education Level",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="flex flex-col items-center">
            <div className="group border border-gray-300 rounded-lg overflow-hidden shadow-lg p-6 hover:bg-blue-600 transition-all duration-500 w-full max-w-[300px]">
              <div className="mb-4 flex justify-center">
                <Image
                  alt={course.title}
                  className="w-[50px] object-contain"
                  src={course.image}
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-center">
                <h3 className="text-black text-lg md:text-xl font-bold group-hover:text-white">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base group-hover:text-white">
                  {course.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
