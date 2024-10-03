import Banner from "@/components/Home/Banner";
import Courses from "@/components/Home/Courses";
import SectionTitle from "@/components/Home/SectionTitle";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <SectionTitle />
      <Courses />
    </div>
  );
};

export default page;
