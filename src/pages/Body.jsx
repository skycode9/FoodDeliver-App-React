import React, { useEffect, useState } from "react";
import RestaurantCard, {
  withLabledRestaurantCard,
} from "../components/RestaurantCard";
import ShimmerContainer from "../components/ShimmerContainer";
import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";

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

  // Higher Order Components
  const RestaurantCardPromoted = withLabledRestaurantCard(RestaurantCard);

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
        <div className="w-full flex flex-col sm:flex-row sm:justify-end gap-4">
          {/* search bar */}
          <div className="min-w">
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

          <div>
            <Accordion />
          </div>
        </div>

        {/* restaurant container */}
        <div className="w-full mt-5 flex flex-wrap justify-center">
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
              <Link
                to={"/restaurant/" + restaurants?.info?.id}
                key={restaurants?.info?.id}
              >
                {/* if the offer is true then use RestaurantCardPromoted otherwise normal Card */}
                {restaurants?.info?.aggregatedDiscountInfoV3 &&
                Object.keys(restaurants?.info?.aggregatedDiscountInfoV3)
                  .length > 0 ? (
                  <RestaurantCardPromoted restData={restaurants?.info} />
                ) : (
                  <RestaurantCard restData={restaurants?.info} />
                )}
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
