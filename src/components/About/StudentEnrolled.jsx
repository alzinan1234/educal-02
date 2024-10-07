"use client";
import Image from "next/image";
import logo1 from "../../image/about/1.png";
import logo2 from "../../image/about/2.png";
import logo3 from "../../image/about/3.png";
import logo4 from "../../image/about/4.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StudentEnrolled = () => {
  const students = [
    {
      id: 1,
      logo: logo1,
      enrolled: 345421,
      dec: "Students Enrolled",
    },
    {
      id: 2,
      logo: logo2,
      enrolled: 123456,
      dec: "Students Enrolled",
    },
    {
      id: 3,
      logo: logo3,
      enrolled: 234567,
      dec: "Students Enrolled",
    },
    {
      id: 4,
      logo: logo4,
      enrolled: 123456,
      dec: "Students Enrolled",
    },
  ];

  // Use useInView hook to detect when the component is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Count only once when in view
    threshold: 0.3, // Trigger when 30% of the component is visible
  });

  return (
    <div className="py-10">
      <div
        ref={ref}
        className="container mx-auto flex flex-wrap items-center justify-center gap-10 md:gap-40 px-5"
      >
        {students.map((student) => (
          <div
            key={student.id}
            className="flex flex-col items-center gap-3 mb-5"
          >
            <Image
              src={student.logo}
              alt="Student logo"
              className="w-20 h-20 md:w-32 md:h-32 rounded-full"
            />
            <p className="text-3xl font-semibold text-gray-900">
              {/* Trigger CountUp only when inView */}
              {inView && (
                <CountUp end={student.enrolled} duration={2} separator="," />
              )}
            </p>
            <p className="text-gray-600 text-sm md:text-base">{student.dec}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentEnrolled;
