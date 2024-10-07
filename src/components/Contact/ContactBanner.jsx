import Image from "next/image";
import React from "react";
import ContactBannerImage from "../../image/contact/contact with us (1).png";

const ContactBanner = () => {
  return (
    <div className="relative w-full">
      {/* Image container */}
      <div className="w-full z-50">
        <Image
          className="object-cover w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]"
          src={ContactBannerImage}
          alt="Contact Banner"
          priority={true} // Optional: helps load the image faster
        />
      </div>
      {/* Overlay text */}
    </div>
  );
};

export default ContactBanner;
