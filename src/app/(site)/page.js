import Banner from "@/components/Home/Banner";
import Courses from "@/components/Home/Courses";
import OtherBanner from "@/components/Home/OtherBanner";
import SectionTitle from "@/components/Home/SectionTitle";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <SectionTitle />
      <Courses />
      <OtherBanner />
    </div>
  );
};

export default page;
