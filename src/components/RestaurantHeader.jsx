import React from "react";

const RestaurantHeader = ({ restaurantHeaderInfo }) => {
  const {
    name,
    avgRating,
    costForTwo,
    cuisines,
    id,
    sla,
    totalRatingsString,
    areaName,
  } = restaurantHeaderInfo;

  return (
    <div>
      <div className="flex justify-center flex-col items-start ml-4 mb-2">
        <h1 className="text-2xl font-bold">{name}</h1>
      </div>
      <div className="flex items-center pl-4 mb-6 border-b border-[rgba(2,6,12,0.15)] h-full overflow-x-scroll gap-5 scrollbar-hide">
        <h1>Order Online</h1>
      </div>
      <div className="px-4 pb-4 rounded-b-[36px] bg-gradient-to-b from-[rgb(255,255,255)] via-[rgb(235,235,242)] to-[rgb(223,223,231)]">
        <div className="rounded-[20px] border-[1px]  border-[rgba(2,6,12,0.15)] bg-[white] [box-shadow:rgba(0,_0,_0,_0.04)_0px_8px_16px_0px]">
          <div className="bg-[rgb(255,_236,_239)] border-[1px]  border-[rgb(255,236,239)] px-[12px] py-[16px] flex items-center rounded-tl-[20px] rounded-tr-[20px]">
            <h1>Outside the area</h1>
          </div>
          <div className="mb-[12px]"></div>
          {/* rating */}
          <div className="flex items-center mx-[16px] my-0">
            <div className="w-[20px] h-[20px] mr-[4px] -mt-[2px]">
              <div className="leading-[0]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  stroke="rgba(2, 6, 12, 0.92)"
                  fill="rgba(2, 6, 12, 0.92)"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                  ></circle>
                  <path
                    d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                    fill="white"
                  ></path>
                  <defs>
                    <linearGradient
                      id="StoreRating20_svg__paint0_linear_32982_71567"
                      x1="10"
                      y1="1"
                      x2="10"
                      y2="19"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#21973B"></stop>
                      <stop offset="1" stopColor="#128540"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="font-[Gilroy] font-semibold text-[16px] leading-[21px] tracking-[-0.4px] text-[rgba(2,_6,_12,_0.92)]">
              <span>{avgRating} </span>
              <span>({totalRatingsString})</span>
            </div>
            <div className="mx-[8px] my-0">.</div>
            <div className="font-[Gilroy] font-semibold text-[16px] leading-[21px] tracking-[-0.4px] text-[rgba(2,_6,_12,_0.92)]">
              ₹{Math.floor(costForTwo / 100)} for two
            </div>
          </div>

          {/* cusisines */}
          <div className="flex items-center mx-[20px] my-[8px]">
            <div className="font-[Gilroy] font-medium text-[14px] leading-[18px] tracking-[-0.35px] text-[rgb(255,_82,_0)]">
              {cuisines.join(", ")}
            </div>
          </div>

          {/* area */}
          <div className="flex mx-[20px] my-0 px-0 py-[4px] items-center">
            <div className="flex flex-col items-center">
              <div className="w-[7px] h-[7px] rounded-[50%] bg-[rgb(196,_196,_196)]"></div>
              <div className="w-px h-[23px] bg-[rgb(196,_196,_196)]"></div>
              <div className="w-[7px] h-[7px] rounded-[50%] bg-[rgb(196,_196,_196)]"></div>
            </div>
            <div className="flex flex-col justify-center ml-[12px] pr-[16px] w-full">
              <div className="flex mb-[2px]">
                <div className="font-[Gilroy] font-semibold text-[14px] leading-[18px] tracking-[-0.35px] text-[rgba(2,_6,_12,_0.92)]">
                  Outlet
                </div>
                <div className="text-center max-w-[70%] ml-[12px] whitespace-nowrap overflow-hidden overflow-ellipsis font-[Gilroy] font-medium text-[14px] leading-[18px] tracking-[-0.35px] text-[rgba(2,_6,_12,_0.6)]">
                  {areaName}
                </div>
              </div>
              <div className="flex mt-[8px] whitespace-nowrap">
                <div className="font-[Gilroy] font-semibold text-[14px] leading-[18px] tracking-[-0.35px] text-[rgba(2,_6,_12,_0.92)]">
                  {sla.slaString}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
