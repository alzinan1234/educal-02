"use client";
import Image from "next/image";
import Banner1 from "../../image/home/hero-1.jpg";
import Banner2 from "../../image/home/hero-sm-1.jpg";

// Correct import for AOS CSS

const Banner = () => {
  return (
    <>
      <div className="mt-36">
        <div>
          <div className="container flex gap-10 justify-center items-center overflow-hidden">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl">Access 2700+</h1>
              <p className="text-5xl font-bold">
                Online yellow-shape Tutorial From <br />
                Top Instructor.
              </p>
              <p className="text-xl">
                Meet university, and cultural institutions,
                <br /> who will share their experience.
              </p>
              <button className="bg-blue-800 w-[170px] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                View All Courses
              </button>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <Image
                  className="w-[400px] rounded rounded-b-3xl rounded-ss-3xl"
                  src={Banner1}
                  alt="Banner1"
                />
                <Image
                  className="w-[200px] rounded-r-3xl"
                  src={Banner2}
                  alt="Banner2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
