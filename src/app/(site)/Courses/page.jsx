import CourseBanner from "@/components/Course/CourseBanner";
import CourseData from "@/components/Course/CourseData";
import CourseSection from "@/components/Course/CourseSection";
import React from "react";

const Courses = () => {
  return (
    <div>
      <CourseBanner />
      <CourseSection />
      <CourseData />
    </div>
  );
};

export default Courses;
