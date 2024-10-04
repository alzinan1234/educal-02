import Image from "next/image";
import React from "react";
import dataScienceImg from "../../image/home/data-science.png";
import business from "../../image/home/business-image_3655046.jpg"; // Importing the image directly
import art from "../../image/home/art.jpeg"; // Importing the image directly
import lifestyle from "../../image/home/lifestyle-logo-png.png"; // Importing the image directly
import markiting from "../../image/home/markiting.jpg"; // Importing the image directly
import Finance from "../../image/home/Finance.webp"; // Importing the image directly
import fitness from "../../image/home/fitness.webp"; // Importing the image directly
import Music from "../../image/home/Music_logo.png"; // Importing the image directly
import academic from "../../image/home/academic.webp"; // Importing the image directly

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
      title: "Art&Design",
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
      title: " Fitness",
      description: "Invest to Your Body",
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
    <div className="grid grid-cols-3 gap-10 container">
      {courses.map((course) => (
        <div key={course.id} className="">
          <div className="flex group border border-gray-400 rounded-lg overflow-hidden shadow-md w-[300px] p-7 gap-5 hover:bg-blue-600 transition-all duration-500">
            <div>
              {" "}
              <Image
                alt={course.title}
                className="w-[50px]  "
                src={course.image}
              />
            </div>
            <div className="">
              <h3 className="text-black tracking-normal group-hover:text-white text-2xl font-bold ">
                {course.title}
              </h3>
              <p className="text-black group-hover:text-white text-xs">
                {course.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
