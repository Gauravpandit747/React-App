// import { ShimmerPostList } from "react-shimmer-effects";
import React from "react";

const Shimmer = () => {
  return (
    // <>
    //   <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={5} gap={30} />
    // </>

    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e,index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
