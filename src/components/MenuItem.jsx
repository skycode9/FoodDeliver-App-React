import { MdOutlineStar } from "react-icons/md";
import { IMAGE_BASE_URL } from "../utils/comman";
import { SiSquare } from "react-icons/si";
import MenuItemDescription from "./MenuItemDescription";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItem = ({ MenuSubData, showItems }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // disptch the action
    dispatch(addItem(item));
  };

  return (
    <div>
      {showItems && (
        <div style={{ padding: "10px", backgroundColor: "#fff" }}>
          {MenuSubData?.map((item) => (
            <div key={item?.card?.info?.id}>
              <div className="flex justify-between min-h-[12rem]">
                <div className="w-[573px]">
                  <div className="" aria-hidden={true}>
                    {item?.card?.info?.isVeg ? (
                      <SiSquare className="text-green-800" />
                    ) : (
                      <SiSquare className="text-red-800" />
                    )}
                  </div>
                  <div className="font-gilroy font-semibold text-[18px] leading-[22px] tracking-[-0.45px] text-[rgba(2,6,12,0.75)] mt-1">
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
                      <MdOutlineStar className="text-green-700" />
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
                    <MenuItemDescription
                      text={item?.card?.info?.description || ""}
                    />
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={IMAGE_BASE_URL + item?.card?.info?.imageId}
                    alt=""
                    className="rounded-[12px] w-[156px] h-[144px] object-cover"
                  />
                  <button
                    className="px-10 py-2.5 text-base font-bold bg-white text-green-600 rounded-lg shadow-lg border border-gray-200 absolute bottom-2 left-1/2 transform -translate-x-1/2 hover:bg-green-50 hover:shadow-xl transition-all duration-200 uppercase tracking-wide cursor-pointer"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD
                  </button>
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
