import Image from "next/image";
import React from "react";
import text_bg from "@/image/home/yellow-bg.png";

const TitleTwo = () => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Title with background image */}
      <div className="relative flex justify-center items-center">
        <h2 className="text-center text-[24px] sm:text-[32px] md:text-[40px] font-bold text-gray-900 z-10">
          We are Proud
        </h2>
        <div className="absolute inset-0 flex justify-center items-center">
          {/* Background image placed behind the text */}
          <Image
            className="absolute bottom-0 z-[-1] left-0 w-[100px] sm:w-[120px] md:w-[180px]"
            src={text_bg}
            alt="Background"
            width={180}
            height={40}
          />
        </div>
      </div>

      {/* Subtitle text */}
      <p className="mt-5 text-gray-500 text-center max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] mx-auto">
        You don’t have to struggle alone, you’ve got our assistance and help.
      </p>
    </div>
  );
};

export default TitleTwo;
