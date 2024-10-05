import React from "react";
import logo2 from "../../../image/home/logo-2.png";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className=" relative top-24 z-50">
        <div className=" container flex justify-between bg-blue-600 px-6 text-white items-center rounded-lg">
          <div className=" text-xl md:text-5xl text-bold p-11">
            <h1>
              You can be your own <br /> Guiding star with our help
            </h1>
          </div>
          <div className="p-10">
            <button className="mt-6 w-[170px]   bg-white text-black  py-4 rounded-lg">
              Get started
            </button>
          </div>
        </div>
      </div>
      <div>
        <footer class="bg-blue-900 py-4 text-gray-400  absolute w-[100%]">
          <div class="container max-w-screen-xl px-4 mx-auto">
            <div class="-mx-4 flex flex-wrap justify-between md:flex-nowrap mt-20">
              <div class="px-4 my-4 w-full xl:w-1/5">
                <Image
                  className="mb-3"
                  src={logo2}
                  width={100}
                  height={100}
                  alt=""
                />
                <p class="text-justify">
                  Tailwindow is a collection of UI Components created using
                  Tailwind CSS Framework. The UI Components give you all the
                  building blocks you need to build any designs without annoying
                  opinionated styles.
                </p>
                <div className="flex gap-3 item-center pt-8">
                  <FaFacebook className="w-6 h-6" />
                  <FaInstagram className="w-6 h-6" />
                  <FaLinkedinIn className="w-6 h-6" />
                  <FaTwitter className="w-6 h-6" />
                  <FaYoutube className="w-6 h-6" />
                </div>
              </div>

              <div class="px-4 my-4 w-full sm:w-auto">
                <h2 class="inline-block  text-white text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                  Company
                </h2>
                <ul class="leading-8">
                  <li>
                    <a href="#" class="hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-blue-400">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-blue-400">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-blue-400">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div class="px-4 my-4 w-full sm:w-auto">
                <h2 class="inline-block text-2xl text-white pb-4 mb-4 border-b-4 border-blue-600">
                  Platform
                </h2>
                <ul class="leading-8">
                  <li>
                    <a href="#" class="hover:text-blue-400">
                      Getting Started With HTML and CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-blue-400">
                      What Is Flex And When to Use It?
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-blue-400">
                      How TailwindCSS Can Help Your Productivity?
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-blue-400">
                      5 Tips to Make a Responsive Website
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-blue-400">
                      See More
                    </a>
                  </li>
                </ul>
              </div>

              <div class="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                <h2 class="inline-block text-white text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                  Subscribe
                </h2>
                <form class="mt-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                  <button
                    type="submit"
                    class="mt-4 w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Subscribe
                  </button>
                  <p class="text-center text-gray-500 mt-2">
                    We will never share your email address with anyone else.
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 mb-5">
            <div className="border border-gray-500"></div>
            <p class="text-center text-white text-sm mt-3">
              &copy; 2021 Al-Zinan. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
