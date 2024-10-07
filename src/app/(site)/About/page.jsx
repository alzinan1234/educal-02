import AboutBanner from "@/components/About/AboutBanner";
import AboutTitle from "@/components/About/AboutTitle";
import Companies from "@/components/About/Companies";
import Feedback from "@/components/About/Feedback";
import Goals from "@/components/About/Goals";
import StudentEnrolled from "@/components/About/StudentEnrolled";
import Teacher from "@/components/About/Teacher";
import TitleTwo from "@/components/About/TitleTwo";
import OtherBanner from "@/components/Home/OtherBanner";
import React from "react";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <Goals />
      <AboutTitle />
      <Companies />
      <Feedback />
      <Teacher />
      <TitleTwo />
      <StudentEnrolled />
      <OtherBanner />
    </div>
  );
};

export default About;
