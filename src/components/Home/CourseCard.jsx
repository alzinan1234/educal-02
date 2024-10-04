import Image from "next/image";
import React from "react";
import course1 from "../../image/home/course-1.jpg";

import course3 from "../../image/home/course-3.jpg";
import course4 from "../../image/home/course-4.jpg";
import course5 from "../../image/home/course-5.jpg";

import course6 from "../../image/home/course-6.jpg";
import teacher1 from "../../image/home/teacher-1.jpg";
import teacher2 from "../../image/home/teacher-2.jpg";
import teacher3 from "../../image/home/teacher-3.jpg";
import teacher4 from "../../image/home/teacher-4.jpg";
import teacher5 from "../../image/home/teacher-5.jpg";
import teacher6 from "../../image/home/teacher-6.jpg";

const courseData = [
  {
    id: 1,
    category: "Art & Design",
    categoryColor: "bg-purple-600", // Using Tailwind CSS class for the color
    lessons: 43,
    rating: 4.5,
    reviews: 44,
    title: "Become a product Manager learn the skills & job.",
    author: "Jim Séchen",
    authorImage: teacher1,
    image: course1,
    price: "Free",
    oldPrice: null,
  },
  {
    id: 2,
    category: "Art & Design",
    categoryColor: "bg-blue-600",
    lessons: 72,
    rating: 4.6,
    reviews: 48,
    title: "Fundamentals of music theory Learn new",
    author: "Barry Tone",
    authorImage: teacher2,
    image: course1,
    price: "$32.00",
    oldPrice: "$68",
  },
  {
    id: 3,
    category: "Development",
    categoryColor: "bg-red-600",
    lessons: 89,
    rating: 3.3,
    reviews: 68,
    title: "Fundamentals of music theory Learn new",
    author: "Barry Tone",
    authorImage: teacher3,
    image: course3,
    price: "$52.00",
    oldPrice: "$78",
  },
  {
    id: 4,
    category: "Ux Design",
    categoryColor: "bg-orange-600",
    lessons: 93,
    rating: 4.6,
    reviews: 44,
    title: "Fundamentals of music theory Learn new",
    author: "Barry Tone",
    authorImage: teacher4,
    image: course4,
    price: "$52.00",
    oldPrice: "$68",
  },
  {
    id: 5,
    category: "Marketing",
    categoryColor: "bg-pink-600",
    lessons: 82,
    rating: 4.0,
    reviews: 58,
    title: "Fundamentals of music theory Learn new",
    author: "Barry Tone",
    authorImage: teacher5,
    image: course5,
    price: "$40.00",
    oldPrice: "$68",
  },
  {
    id: 6,
    category: "Business",
    categoryColor: "bg-green-600",
    lessons: 90,
    rating: 4.2,
    reviews: 78,
    title: "Fundamentals of music theory Learn new",
    author: "Barry Tone",
    authorImage: teacher6,
    image: course6,
    price: "$32.00",
    oldPrice: "$68",
  },
];

const CourseCard = () => {
  return (
    <div className="mt-16 mb-16">
      <div className=" container  grid grid-cols-1 md:grid-cols-3 gap-6">
        {courseData.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-lg relative overflow-hidden"
          >
            {/* Card Image */}
            <Image
              src={course.image}
              alt={course.title}
              className="w-full h-[200px] object-cover"
              width={400}
              height={300}
            />

            {/* Card Content */}
            <div className="p-4">
              <div
                className={`text-white text-sm px-3 py-1 inline-block absolute top-5 rounded-full ${course.categoryColor}`}
              >
                {course.category}
              </div>
              <div className="flex justify-between items-center mt-2 text-gray-500">
                <p>
                  <i className="fa fa-book"></i> {course.lessons} Lesson
                </p>
                <p>
                  <i className="fa fa-star text-yellow-500"></i> {course.rating}{" "}
                  ({course.reviews})
                </p>
              </div>

              <h3 className="text-lg font-bold mt-2">{course.title}</h3>

              {/* Author Section */}
              <div className="flex items-center mt-4">
                <Image
                  src={course.authorImage}
                  alt={course.author}
                  className="w-8 h-8 rounded-full"
                  width={40}
                  height={40}
                />
                <p className="ml-2">{course.author}</p>
              </div>

              {/* Price Section */}
              <div className="flex justify-between items-center mt-4">
                <div className="text-blue-600 font-bold">
                  {course.price}
                  {course.oldPrice && (
                    <span className="text-gray-500 line-through ml-2">
                      {course.oldPrice}
                    </span>
                  )}
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  Know Details <i className="fa fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
