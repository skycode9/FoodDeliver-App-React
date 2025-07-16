import React, { useState } from "react";
import restList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(restList);
  const handleTopRatedRestauranr = () => {
    const filteredRestaurant = listOfRestaurant.filter(
      (res) => res?.info?.avgRating > 4.5
    );
    setlistOfRestaurant(filteredRestaurant);
  };
  return (
    <>
      <div className="mt-5">
        {/* search bar */}
        <div className="w-full flex justify-between">
          <div className="w-10 flex">
            <input className="border p-2" type="text" />
            <button className="bg-blue-400 text-white px-3 py-2 rounded-md ml-1 cursor-pointer">
              Search
            </button>
          </div>
          <div>
            <button
              className="px-3 py-2 bg-green-800 text-white rounded-md cursor-pointer"
              onClick={handleTopRatedRestauranr}
            >
              Top Rated Restaurant
            </button>
          </div>
        </div>
        {/* restaurant container */}
        <div className="mw-full mt-5 flex flex-wrap">
          {listOfRestaurant.map((restaurants) => (
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
