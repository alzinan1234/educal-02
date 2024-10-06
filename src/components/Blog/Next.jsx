import React from "react";

const Next = () => {
  return (
    <div className="mt-12 mb-36">
      <div className=" container group flex gap-9 items-center">
        <p className="text-xl">Prev</p>
        <p className="border border-gray-500 group-hover:text-white  p-3 px-4 rounded-md hover:bg-blue-600 transition-all duration-500">
          1
        </p>
        <p className="border border-gray-500 group-hover:text-white p-3 px-4 rounded-md bg-blue-600 transition-all duration-500">
          2
        </p>
        <p className="border border-gray-500 group-hover:text-white p-3 px-4 rounded-md hover:bg-blue-600 transition-all duration-500">
          3
        </p>
        <p className="text-xl">Next</p>
      </div>
    </div>
  );
};

export default Next;
