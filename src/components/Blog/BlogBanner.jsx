import blogBanner from "../../image/blog/contact with us (3).png";
import Image from "next/image";

const BlogBanner = () => {
  return (
    <>
      <div className="relative w-full">
        {/* Image container */}
        <div className="w-full z-50">
          <Image
            className="object-cover w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[80vh]"
            src={blogBanner}
            alt="Contact Banner"
            priority={true} // Optional: helps load the image faster
          />
        </div>
        {/* Overlay text */}
      </div>
    </>
  );
};

export default BlogBanner;
