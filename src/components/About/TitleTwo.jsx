import Image from "next/image";
import React from "react";
import text_bg from "@/image/home/yellow-bg.png";

const TitleTwo = () => {
  return (
    <div>
      <h2 className="text-center text-[32px] md:text-[40px] font-bold text-gray-900 relative">
        <Image
          className=" absolute mx-[550px] flex items-center justify-center bottom-0 md:bottom-[3px] z-[-12] left-[-10px] md:left-[-20px] leFadeInLeft"
          src={text_bg}
          alt="Background"
          width={180}
          height={40}
        />
        We are Proud
      </h2>
      <p className="mt-5 text-gray-500 text-center">
        You dont have to struggle alone, youve got our assistance and help.
      </p>
    </div>
  );
};

export default TitleTwo;
