import React from "react";
import CourseBanner1 from "../../image/course/contact with us (2).png";
import Image from "next/image";

const CourseBanner = () => {
  return (
    <>
      <div className="relative w-full">
        {/* Image container */}
        <div className="w-full z-50">
          <Image
            className="object-cover w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]"
            src={CourseBanner1}
            alt="Contact Banner"
            priority={true} // Optional: helps load the image faster
          />
        </div>
        {/* Overlay text */}
      </div>
    </>
  );
};

export default CourseBanner;
