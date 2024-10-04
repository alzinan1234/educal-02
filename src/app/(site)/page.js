import Banner from "@/components/Home/Banner";
import CourseCard from "@/components/Home/CourseCard";
import Courses from "@/components/Home/Courses";
import OtherBanner from "@/components/Home/OtherBanner";
import SectionTitle from "@/components/Home/SectionTitle";
import SectionTitleTwo from "@/components/Home/SectionTitleTwo";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <SectionTitle />
      <Courses />
      <OtherBanner />
      <SectionTitleTwo />
      <CourseCard />
    </div>
  );
};

export default page;
