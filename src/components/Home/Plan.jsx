"use client";
import { useState } from "react";

const Plan = () => {
  // State to manage the active plan (monthly or annually)
  const [isAnnual, setIsAnnual] = useState(true);

  // Monthly and Annual prices for the plans
  const plans = {
    monthly: {
      gold: 5.99,
      diamond: 9.99,
    },
    annual: {
      gold: 59.99,
      diamond: 99.99,
    },
  };

  return (
    <div className="mt-14 mb-14">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center">
          {/* Toggle between Monthly and Annual Plan */}
          <div className="flex space-x-2 mb-8">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded ${
                !isAnnual ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Monthly Plan
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded ${
                isAnnual ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Annual Plan
            </button>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Gold Plan */}
            <div className="p-16 bg-gray-100 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">Gold</h2>
              <p className="text-gray-600 mb-4">
                Perfect for small marketing teams
              </p>
              <h3 className="text-4xl font-bold">
                ${isAnnual ? plans.annual.gold : plans.monthly.gold}
                <span className="text-base font-medium">
                  / {isAnnual ? "annually" : "monthly"}
                </span>
              </h3>
              <hr className="my-4" />
              <ul className="list-none space-y-2">
                <li>✅ Course Discussions</li>
                <li>✅ Content Library</li>
                <li>✅ 1-hour Mentorship</li>
              </ul>
              <button className="mt-6 w-[170px]  border border-blue-600 text-black  py-2 rounded-lg">
                Get started
              </button>
            </div>

            {/* Diamond Plan */}
            <div className="relative p-20 bg-gray-100 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">Diamond</h2>
              <p className="text-gray-600 mb-4">
                Perfect for small marketing teams
              </p>
              <h3 className="text-4xl font-bold">
                ${isAnnual ? plans.annual.diamond : plans.monthly.diamond}
                <span className="text-base font-medium">
                  / {isAnnual ? "annually" : "monthly"}
                </span>
              </h3>
              <hr className="my-4" />
              <ul className="list-none space-y-2">
                <li>✅ Course Discussions</li>
                <li>✅ Content Library</li>
                <li>✅ 1-hour Mentorship</li>
                <li>✅ Online Course</li>
              </ul>
              <button className="mt-6 w-[170px] bg-blue-500 text-white py-2 rounded-lg">
                Get started
              </button>

              {/* "Best Value" Label */}
              <div className="absolute top-0 right-0 bg-pink-500 text-white text-sm px-2 py-1 rounded-bl-lg">
                Best Value
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
