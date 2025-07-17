import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerContainer from "./ShimmerContainer";

const Body = () => {
  // main render
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  // for filter render
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [serchTxt, setSerchTxt] = useState("");

  // loading state
  const [isLoading, setIsLoading] = useState(true);

  const handleTopRatedRestauranr = () => {
    const filteredRestaurant = listOfRestaurant.filter(
      (res) => res?.info?.avgRating > 4.5
    );
    setlistOfRestaurant(filteredRestaurant);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // Optional Chaining
      const restaurantData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setlistOfRestaurant(restaurantData);
      setFilteredRestaurant(restaurantData);
      setIsLoading(false);
    } catch (error) {
      console.log("Something went wrong", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Conditional Rendering
  return isLoading ? (
    <ShimmerContainer />
  ) : (
    <>
      <div className="mt-5">
        <div className="w-full flex justify-between">
          {/* search bar */}
          <div className="w-10 flex">
            <input
              className="border p-2 rounded"
              type="text"
              placeholder="Search Restaurant"
              value={serchTxt}
              onChange={(e) => {
                const searchValue = e.target.value;
                setSerchTxt(searchValue);

                if (searchValue === "") {
                  // If search is empty, show all restaurants
                  setlistOfRestaurant(filteredRestaurant);
                } else {
                  // Filter restaurants based on search input
                  const newFilteredRestaurant = filteredRestaurant.filter(
                    (res) => {
                      return res.info.name
                        .toLowerCase()
                        .includes(searchValue.toLowerCase());
                    }
                  );
                  setlistOfRestaurant(newFilteredRestaurant);
                }
              }}
            />
          </div>

          {/* Top Restaurant Filter */}
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
          {listOfRestaurant.length === 0 ? (
            <div className="w-full text-center py-10">
              <h2 className="text-2xl text-gray-600">
                No restaurants found matching your search
              </h2>
              <p className="text-gray-500 mt-2">
                Try searching with different keywords
              </p>
            </div>
          ) : (
            listOfRestaurant.map((restaurants) => (
              <RestaurantCard
                restData={restaurants?.info}
                key={restaurants?.info?.id}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
