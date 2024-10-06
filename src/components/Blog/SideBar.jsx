import Image from "next/image";
import Image1 from "../../image/blog/blog-1.jpg";
import Image2 from "../../image/blog/blog-2.jpg";
import Image3 from "../../image/blog/blog-3.jpg";
import Banner2 from "../../image/blog/banner-1.jpg";

const SideBar = () => {
  const posts = [
    {
      id: 1,
      date: "October 15, 2021",
      title: "The Importance Intrinsic Motivation.",
      image: Image1, // Replace with your own image paths
    },
    {
      id: 2,
      date: "May 05, 2023",
      title: "A Better Alternative To Grading Student.",
      image: Image2,
    },
    {
      id: 3,
      date: "October 15, 2021",
      title: "Strategic Social Media & Evolution of Visual",
      image: Image3,
    },
  ];

  return (
    <>
      <div className="w-full lg:w-72 p-4 bg-white">
        {/* Search Input */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for courses..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="absolute right-4 top-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>
        </div>

        {/* Recent Posts */}
        <h2 className="mt-9 text-xl lg:text-2xl font-semibold mb-4">
          Recent posts
        </h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col lg:flex-row items-start gap-4 lg:gap-9"
            >
              <div className="w-full lg:w-40 h-24 relative rounded overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">{post.date}</p>
                <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Categories */}
        <h2 className="mt-12 text-xl lg:text-2xl font-semibold mb-4">
          Categories
        </h2>
        <div className="flex flex-wrap gap-4">
          <button className="py-2 px-4 text-sm font-semibold border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 w-full lg:w-auto">
            All Courses
          </button>
          <button className="py-2 px-4 text-sm font-semibold border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 w-full lg:w-auto">
            Web Development
          </button>
          <button className="py-2 px-4 text-sm font-semibold border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 w-full lg:w-auto">
            Business
          </button>
          <button className="py-2 px-4 text-sm font-semibold border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 w-full lg:w-auto">
            Marketing
          </button>
          <button className="py-2 px-4 text-sm font-semibold border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 w-full lg:w-auto">
            Technology
          </button>
          <button className="py-2 px-4 text-sm font-semibold border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 w-full lg:w-auto">
            Personal Development
          </button>
          <button className="py-2 px-4 text-sm font-semibold border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 w-full lg:w-auto">
            Science
          </button>
        </div>
      </div>

      <div className="mt-10 mb-10">
        {/* Tags */}
        <h2 className="mt-12 text-xl lg:text-2xl font-semibold mb-4">Tags</h2>
        <div className="flex flex-wrap gap-4">
          <button className="py-2 px-4 text-sm font-semibold border rounded-md hover:bg-gray-100 hover:text-gray-700 w-full lg:w-auto">
            Art & Design
          </button>
          <button className="py-2 px-4 text-sm font-semibold bg-slate-300 rounded-md hover:bg-gray-100 hover:text-gray-700 w-full lg:w-auto">
            Course
          </button>
          <button className="py-2 px-4 text-sm font-semibold bg-slate-300 rounded-md hover:bg-gray-100 hover:text-gray-700 w-full lg:w-auto">
            Videos
          </button>
          <button className="py-2 px-4 text-sm font-semibold bg-slate-300 rounded-md hover:bg-gray-100 hover:text-gray-700 w-full lg:w-auto">
            App
          </button>
          <button className="py-2 px-4 text-sm font-semibold bg-slate-300 rounded-md hover:bg-gray-100 hover:text-gray-700 w-full lg:w-auto">
            Education
          </button>
          <button className="py-2 px-4 text-sm font-semibold bg-slate-300 rounded-md hover:bg-gray-100 hover:text-gray-700 w-full lg:w-auto">
            Data Science
          </button>
          <button className="py-2 px-4 text-sm font-semibold bg-slate-300 rounded-md hover:bg-gray-100 hover:text-gray-700 w-full lg:w-auto">
            Machine Learning
          </button>
          <button className="py-2 px-4 text-sm font-semibold bg-slate-300 rounded-md hover:bg-gray-100 hover:text-gray-700 w-full lg:w-auto">
            Tips
          </button>
        </div>
      </div>

      <div className="mt-28 flex items-center justify-center">
        <Image src={Banner2} alt="" className="w-full lg:w-auto" />
      </div>
    </>
  );
};

export default SideBar;
