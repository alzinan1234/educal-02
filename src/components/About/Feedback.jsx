import React from "react";
import { FaCheck } from "react-icons/fa6";
import bg3 from "../../image/about/testimonial-bg-3.jpg"; // Import background image

const Feedback = () => {
  return (
    <>
      <div className="mt-10">
        <div
          className=" flex flex-col md:flex-row gap-10 items-center justify-center p-20 py-10"
          style={{
            backgroundImage: `url(${bg3.src})`, // Apply the background image
            backgroundSize: "cover", // Cover the entire container
            backgroundPosition: "center", // Center the background image
            backgroundRepeat: "no-repeat", // Prevent repetition
          }}
        >
          {/* Left Section */}
          <div className="text-center md:text-left">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-white">
                Student <br />
                Community Feedback
              </h2>
              <p className="text-white text-lg">
                Our students have been incredibly supportive and have given us{" "}
                <br />
                valuable feedback. <br />
                Tell us about your favorite courses, lessons, and instructors.{" "}
                <br /> We will listen, learn, and strive to improve. Share your
                thoughts and experiences with us today!
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center">
            {/* Embedded YouTube Video */}
            <div>
              <iframe
                width="476"
                height="300"
                src="https://www.youtube.com/embed/Rr0uFzAOQus"
                title="Learn ABCs with Morphle and Mila | Learning Videos | Cartoons for Kids | Morphle TV"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Course Outcome Section */}
            <div className="w-[476px] p-6 h-[209px] bg-white text-black mx-auto flex items-center gap-2 justify-center">
              <div>
                <FaCheck className="w-10 h-10 bg-blue-600 text-white rounded-full" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl">Course Outcome</p>
                <p className="">
                  Faff about A bit of hows your father getmate cack codswallop
                  crikey argy-bargy cobblers lost his bottle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
