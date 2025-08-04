import { MdOutlineStar } from "react-icons/md";
import { IMAGE_BASE_URL } from "../utils/comman";
import { CgSquare } from "react-icons/cg";
import { BiCheckboxSquare, BiCheckSquare } from "react-icons/bi";
import { SiSquare } from "react-icons/si";

const MenuItem = ({ openStatus, indexData, MenuSubData }) => {
  console.log("menusubdata", MenuSubData);

  return (
    <div>
      {openStatus === indexData && (
        <div style={{ padding: "10px", backgroundColor: "#fff" }}>
          {MenuSubData?.map((item) => (
            <div key={item?.card?.info?.id}>
              <div className="flex justify-between">
                <div className="w-[600px]">
                  <div className="" aria-hidden={true}>
                    {item?.card?.info?.isVeg ? (
                      <SiSquare className="text-green-800" />
                    ) : (
                      <SiSquare className="text-red-800" />
                    )}
                  </div>
                  <div class="font-gilroy font-semibold text-[18px] leading-[22px] tracking-[-0.45px] text-[rgba(2,6,12,0.75)]">
                    {item?.card?.info?.name}
                  </div>
                  <div className="font-[550] mt-1 text-gray-900">
                    ₹{" "}
                    {Math.floor(
                      item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100
                    )}
                  </div>
                  {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                    <div className="flex gap-0.5 text-sm items-center">
                      <MdOutlineStar className="text-green-500" />
                      <div>
                        {item?.card?.info?.ratings?.aggregatedRating?.rating}(
                        {
                          item?.card?.info?.ratings?.aggregatedRating
                            ?.ratingCountV2
                        }
                        )
                      </div>
                    </div>
                  )}

                  <div className="mt-2">
                    {item?.card?.info?.description
                      .split(" ")
                      .slice(0, 30)
                      .join(" ") + "..."}
                  </div>
                </div>

                <div>
                  <img
                    src={IMAGE_BASE_URL + item?.card?.info?.imageId}
                    alt=""
                    className="rounded-[12px] w-[156px] h-[144px] object-cover"
                  />
                </div>
              </div>
              <div className="border-b border-gray-300 h-px my-5"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
