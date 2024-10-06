import blogBanner from "../../image/blog/page-title-2.464b018b.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaCircleDot } from "react-icons/fa6";

const BlogBanner = () => {
  return (
    <>
      <div className="relative w-full">
        {/* Image container */}
        <div className="w-full z-50">
          <Image
            className="object-cover w-full h-[100vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]"
            src={blogBanner}
            alt="Course Banner"
          />
        </div>
        {/* Overlay text */}
        <div className="container  mx-auto absolute top-1/3 sm:top-1/4 left-0 right-0 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Blog Grid
          </h1>
          <div className="flex justify-center items-center gap-3 mt-5">
            <Link className="text-lg font-bold text-white" href="/">
              <p>Home</p>
            </Link>
            <FaCircleDot className="w-2 h-2 text-white" />
            <Link className="text-lg font-bold text-white" href="/Blog">
              <p>Blog</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogBanner;