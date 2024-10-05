import Banner from "@/components/Home/Banner";
import CourseCard from "@/components/Home/CourseCard";
import Courses from "@/components/Home/Courses";
import Events from "@/components/Home/Events";

import OtherBanner from "@/components/Home/OtherBanner";
import SectionTitle from "@/components/Home/SectionTitle";
import SectionTitleTwo from "@/components/Home/SectionTitleTwo";
import TitleThree from "@/components/Home/TitleThree";
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

      <TitleThree />
      <Events />
    </div>
  );
};

export default page;
