import React from "react";

const Shimmer = () => {
  const skeletonItems = Array.from({ length: 18 });

  return (
    <div>
      <div className="w-screen my-5 h-25 aspect-square bg-gray-200"></div>
      <div className="flex flex-wrap animate-pulse">
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className="w-55 h-80 m-3 aspect-square bg-gray-200"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
