import React from "react";

const Shimmer = () => {
  return (
    <div className="w-[250px] border border-gray-200 p-[5px] bg-gray-100 m-5 mb-4 animate-pulse">
      {/* Image placeholder */}
      <div className="w-full h-40 bg-gray-300 rounded mb-4 shimmer"></div>
      
      {/* Content placeholders */}
      <div className="flex flex-col gap-3">
        {/* Restaurant name placeholder */}
        <div className="h-6 bg-gray-300 rounded w-3/4 shimmer"></div>
        
        {/* Cuisines placeholder */}
        <div className="h-4 bg-gray-300 rounded w-full shimmer"></div>
        
        {/* Rating placeholder */}
        <div className="h-4 bg-gray-300 rounded w-1/2 shimmer"></div>
        
        {/* Cost placeholder */}
        <div className="h-4 bg-gray-300 rounded w-2/3 shimmer"></div>
        
        {/* Delivery time placeholder */}
        <div className="h-4 bg-gray-300 rounded w-1/3 shimmer"></div>
      </div>
    </div>
  );
};

export default Shimmer;
