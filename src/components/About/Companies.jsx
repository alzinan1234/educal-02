"use client";

import Image from "next/image";
import Brand1 from "../../image/about/brand-1.png";
import Brand2 from "../../image/about/brand-2.png";
import Brand3 from "../../image/about/brand-3.png";
import Brand4 from "../../image/about/brand-4.png";
import Brand5 from "../../image/about/brand-5.png";
import Brand6 from "../../image/about/brand-6.png";
import Slider from "react-slick";

const Companies = () => {
  const companies = [
    { id: 1, logo: Brand1 },
    { id: 2, logo: Brand2 },
    { id: 3, logo: Brand3 },
    { id: 4, logo: Brand4 },
    { id: 5, logo: Brand5 },
    { id: 6, logo: Brand6 },
  ];

  const settings = {
    dots: true, // Disable dots if not needed
    infinite: true, // Ensure infinite scrolling
    speed: 500,
    slidesToShow: 6, // Number of logos visible at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Autoplay speed (1 second)
    pauseOnHover: false, // Don't pause on hover
    pauseOnFocus: false, // Don't pause on focus
    pauseOnDotsHover: false, // Don't pause on dot hover
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // Mobile view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Small mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container py-4">
        <Slider {...settings}>
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex justify-center items-center p-5"
            >
              <Image
                className="w-24 h-24 object-contain"
                src={company.logo}
                alt={`Company Logo ${company.id}`}
                width={100}
                height={100} // Set image size explicitly for better control
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Companies;
