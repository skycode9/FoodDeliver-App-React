import React from "react";
import restList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <>
      <div className="mt-5">
        {/* search bar */}
        <div className="w-10 flex">
          <input className="border p-2" type="text" />
          <button className="bg-blue-400 text-white px-3 py-2 rounded-md ml-1 cursor-pointer">
            Search
          </button>
        </div>
        {/* restaurant container */}
        <div className="mw-full mt-5 flex flex-wrap">
          {restList.map((restaurants) => (
            <RestaurantCard
              restData={restaurants?.info}
              key={restaurants?.info?.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
