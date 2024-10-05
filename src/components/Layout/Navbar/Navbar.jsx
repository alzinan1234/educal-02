"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo1 from "../../../image/home/logo (1).png";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { SvgBlackIcon } from "@/components/untility/SvgBlackIcon";
import { SvgWhiteIcon } from "@/components/untility/SvgWhiteIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle
  const [isScrolled, setIsScrolled] = useState(false); // For scroll background change
  const pathname = usePathname(); // Get the current route using usePathname

  // Detect scroll position and update state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Navbar background becomes white after scrolling down
      } else {
        setIsScrolled(false); // Navbar background is transparent at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if the current page is the home page
  const isHomePage = pathname === "/"; // Check the current path

  console.log("path", isHomePage, isScrolled);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[800]  overflow-hidden transition-all duration-300 ${
        isScrolled ? "bg-white opacity-100" : "bg-transparent opacity-100"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-[80px]">
        {/* Logo and Category */}
        <div className="flex gap-8 items-center justify-between">
          <Image className="w-[120px]" src={logo1} alt="Logo" />
          <div
            className={`w-[1.5px] h-[25px] ${
              isScrolled ? "bg-gray-500" : "bg-gray-200"
            }`}
          ></div>

          <div className="flex justify-end items-center gap-3">
            <div className=" w-[19px] h-[18px]">
              {isScrolled && isHomePage ? <SvgBlackIcon /> : null}
              {!isScrolled && isHomePage ? <SvgBlackIcon /> : null}
              {isScrolled && !isHomePage ? <SvgBlackIcon /> : null}
              {!isScrolled && !isHomePage ? <SvgWhiteIcon /> : null}
            </div>
            <p
              className={`text-[16px] font-bold hidden md:block ${
                isScrolled && isHomePage ? "text_black" : ""
              } 
                ${!isScrolled && isHomePage ? "text_black" : ""} 
                ${isScrolled && !isHomePage ? "text_black" : ""} 
                ${!isScrolled && !isHomePage ? "text_white" : ""}
              `}
            >
              Category
            </p>
          </div>
        </div>

        {/* Links (hidden on small screens, shown on larger screens) */}
        <div className="hidden md:flex items-center gap-6 text-lg font-semibold">
          <Link href="/">
            <p
              className={`text-sm font-semibold hover:text-gray-800 ${
                isScrolled && isHomePage ? "text_black" : ""
              } 
                ${!isScrolled && isHomePage ? "text_black" : ""} 
                ${isScrolled && !isHomePage ? "text_black" : ""} 
                ${!isScrolled && !isHomePage ? "text_white" : ""}
              `}
            >
              Home
            </p>
          </Link>
          <Link href="/Courses">
            <p
              className={`text-sm font-semibold hover:text-gray-800 ${
                isScrolled && isHomePage ? "text_black" : ""
              } 
                ${!isScrolled && isHomePage ? "text_black" : ""} 
                ${isScrolled && !isHomePage ? "text_black" : ""} 
                ${!isScrolled && !isHomePage ? "text_white" : ""}
              `}
            >
              Courses
            </p>
          </Link>
          <Link href="/Blog">
            <p
              className={`text-sm font-semibold hover:text-gray-800 ${
                isScrolled && isHomePage ? "text_black" : ""
              } 
                ${!isScrolled && isHomePage ? "text_black" : ""} 
                ${isScrolled && !isHomePage ? "text_black" : ""} 
                ${!isScrolled && !isHomePage ? "text_white" : ""}
              `}
            >
              Blog
            </p>
          </Link>
          <Link href="/Pages">
            <p
              className={`text-sm font-semibold hover:text-gray-800 ${
                isScrolled && isHomePage ? "text_black" : ""
              } 
                ${!isScrolled && isHomePage ? "text_black" : ""} 
                ${isScrolled && !isHomePage ? "text_black" : ""} 
                ${!isScrolled && !isHomePage ? "text_white" : ""}
              `}
            >
              Pages
            </p>
          </Link>
          <Link href="/Contact">
            <p
              className={`text-sm font-semibold hover:text-gray-800 ${
                isScrolled && isHomePage ? "text_black" : ""
              } 
                ${!isScrolled && isHomePage ? "text_black" : ""} 
                ${isScrolled && !isHomePage ? "text_black" : ""} 
                ${!isScrolled && !isHomePage ? "text_white" : ""}
              `}
            >
              Contact
            </p>
          </Link>
        </div>

        {/* Search, Cart, Button */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Input */}
          <div
            className={`flex items-center  rounded-lg px-3 py-2 space-x-2 ${
              !isScrolled && !isHomePage
                ? "flex items-center bg-transparent border rounded-lg px-3 py-2 space-x-2"
                : "border-2 border-blue-700"
            } ${
              isScrolled &&
              isHomePage &&
              "flex items-center bg-gray-100 rounded-lg px-3 py-2 space-x-2"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 text-gray-400 ${
                !isScrolled && !isHomePage ? "text-white" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className={` bg-transparent outline-none  ${
                !isScrolled && !isHomePage
                  ? "text-white placeholder:text-white"
                  : "text-gray-600 placeholder:text-gray-600 "
              } `}
            />
          </div>

          {/* Cart Icon */}
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-gray-600 ${
                !isHomePage && !isScrolled ? "text-white" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l3.6-7H6.4M7 13l-1.2 4.6a1 1 0 00.9 1.4h12.6a1 1 0 00.9-1.4L17 13M7 13h10M10 17h4m-1 0v2m-2 0v2"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full px-[6px] font-bold text-xs">
              2
            </span>
          </div>

          {/* Try for Free Button */}
          <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Try for free
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (shown when open) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-lg">
          <Link href="/">
            <p className="py-2 text-sm font-semibold hover:text-gray-800">
              Home
            </p>
          </Link>
          <Link href="/Courses">
            <p className="py-2 text-sm font-semibold hover:text-gray-800">
              Courses
            </p>
          </Link>
          <Link href="/Blog">
            <p className="py-2 text-sm font-semibold hover:text-gray-800">
              Blog
            </p>
          </Link>
          <Link href="/Pages">
            <p className="py-2 text-sm font-semibold hover:text-gray-800">
              Pages
            </p>
          </Link>
          <Link href="/Contact">
            <p className="py-2 text-sm font-semibold hover:text-gray-800">
              Contact
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
