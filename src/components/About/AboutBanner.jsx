import Image from "next/image";
import Link from "next/link";
import { FaCircleDot } from "react-icons/fa6";
import Banner2 from "../../image/about/About.png";

const AboutBanner = () => {
  return (
    <>
      <div className="relative w-full">
        {/* Image container */}
        <div className="w-full z-50">
          <Image
            className="object-cover w-full h-[60vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]"
            src={Banner2}
            alt="Course Banner"
          />
        </div>
        {/* Overlay text */}
        <div className="container  mx-auto absolute top-1/3 sm:top-1/4 left-0 right-0 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"></h1>
          <div className="flex justify-center items-center gap-3 mt-5">
            <Link className="text-lg font-bold text-white" href="/"></Link>

            <Link
              className="text-lg font-bold text-white"
              href="/Courses"
            ></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;
