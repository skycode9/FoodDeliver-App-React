import { IMAGE_BASE_URL } from "../utils/comman";
import React from "react";

const RestaurantCard = ({ restData }) => {
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    restData;

  return (
    <>
      <div
        className="w-[250px] h-[420px] border border-black p-[5px] bg-gray-100 m-5 cursor-pointer hover:bg-gray-200 mb-4 flex flex-col"
        data-testid="resCard"
      >
        <img
          src={IMAGE_BASE_URL + cloudinaryImageId}
          alt=""
          className="rounded mb-4 h-[180px] w-full object-cover"
        />
        <div className="flex flex-col gap-3 flex-grow">
          <h3 className="font-semibold text-xl line-clamp-2">{name}</h3>
          <h4 className="line-clamp-2">{cuisines.join(", ") || cuisines[0]}</h4>
          <h4>{avgRating} star</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla?.slaString}</h4>
        </div>
      </div>
    </>
  );
};

// Higher Order Component

// take input as a - RestaurantCard ===> RestaurantCardPromoted

export const withLabledRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <span className="absolute m-1 p-3 bg-black text-white rounded">
          {props?.restData?.aggregatedDiscountInfoV3?.header}{" "}
          {props?.restData?.aggregatedDiscountInfoV3?.subHeader}
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
