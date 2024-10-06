import AboutBanner from "@/components/About/AboutBanner";
import AboutTitle from "@/components/About/AboutTitle";
import Companies from "@/components/About/Companies";
import Feedback from "@/components/About/Feedback";
import Goals from "@/components/About/Goals";
import React from "react";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <Goals />
      <AboutTitle />
      <Companies />
      <Feedback />
    </div>
  );
};

export default About;
