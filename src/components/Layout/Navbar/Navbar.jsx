import Image from "next/image";
import logo1 from "../../../image/home/logo (1).png";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className=" container ">
        <div className="mx-auto flex justify-between items-center">
          <div className="flex gap-10 text-center justify-center">
            <div>
              <Image className="w-[120px]" src={logo1} alt=""></Image>
            </div>
            <div className=" border-left"></div>
            <div>
              <p className="text-xl font-bold">Category</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xl font-semibold">
            <Link href="/">
              <p className="text-sm font-semibold hover:text-gray-800">Home</p>
            </Link>
            <Link href="/Courses">
              <p className="text-sm font-semibold hover:text-gray-800">
                Courses
              </p>
            </Link>
            <Link href="/Blog">
              <p className="text-sm font-semibold hover:text-gray-800">Blog</p>
            </Link>
            <Link href="/Pagess">
              <p className="text-sm font-semibold hover:text-gray-800">Pages</p>
            </Link>
            <Link href="/Contact">
              <p className="text-sm font-semibold hover:text-gray-800">
                Contact
              </p>
            </Link>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-white  rounded-md">
            {/* Search Input */}
            <div className="flex items-center bg-gray-100  rounded-lg px-3 py-2 space-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
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
                className="bg-transparent outline-none text-gray-600"
              />
            </div>
            {/* Cart Icon with Badge */}
            <div className="relative bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
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
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full px-1 text-xs">
                0
              </span>
            </div>
            {/* Button */}
            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Try for free
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
