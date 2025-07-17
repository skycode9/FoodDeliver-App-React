import React from "react";
import Shimmer from "./Shimmer";

const ShimmerContainer = () => {
  return (
    <div className="flex flex-wrap">
      {/* Create an array of 12 shimmer cards to simulate loading multiple restaurants */}
      {Array.from({ length: 12 }, (_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
  );
};

export default ShimmerContainer;
