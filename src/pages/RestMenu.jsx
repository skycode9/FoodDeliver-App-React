import { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantHeader from "../components/RestaurantHeader";
import ShimmerMenu from "../components/ShimmerMenu";
import MenuItem from "../components/MenuItem";
import MenuTitle from "../components/MenuTitle";
import NestedMenu from "../components/NestedMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestMenu = () => {
  const [isOpen, setIsOpen] = useState(0);

  const { restId } = useParams();
  const MenuInfo = useRestaurantMenu(restId);
  console.log("MenuInfo", MenuInfo);
  console.log("Type of MenuInfo:", typeof MenuInfo);

  const MenuHeaderInfo = MenuInfo?.cards[2]?.card?.card?.info;
  console.log("MenuInfoHeader", MenuHeaderInfo);

  const MenuCategoryData =
    MenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  console.log("MenuCategoryData", MenuCategoryData);

  if (!MenuInfo || !MenuInfo?.cards || MenuInfo.cards.length === 0) {
    return (
      <div>
        <ShimmerMenu />
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-[800px] min-h-[800px] mt-5 mx-auto">
        <RestaurantHeader restaurantHeaderInfo={MenuHeaderInfo} />
        <div>
          <div className="flex justify-center flex-row items-center pt-[32px] px-0 pb-[16px] h-full w-full">
            <div className="mx-[4px] my-0 tracking-[4px] font-[Gilroy] font-semibold text-[30px] leading-[17px] text-[rgba(2,_6,_12,_0.6)]">
              Menu
            </div>
          </div>

          <div className="h-[0.5px] bg-[rgba(2,_6,_12,_0.15)] w-[calc(100% - 32px)] mx-[auto] my-[24px]" />

          <div className="relative">
            {MenuCategoryData.map((menu, index) => (
              <div
                className="max-w-[800px] mx-auto"
                key={menu?.card?.card?.categoryId}
              >
                <MenuTitle
                  MenuTitle={menu?.card?.card?.title}
                  MenuLength={menu?.card?.card?.itemCards?.length}
                  onClick={() => setIsOpen(index)}
                />
                {menu?.card?.card?.categories?.length > 0 ? (
                  <NestedMenu
                    Categories={menu?.card?.card?.categories}
                    openStatus={isOpen}
                    indexData={index}
                  />
                ) : (
                  <MenuItem
                    openStatus={isOpen}
                    indexData={index}
                    MenuSubData={menu?.card?.card?.itemCards}
                  />
                )}
                <div className="h-[16px] border-b-[16px_solid_rgba(2,_6,_12,_.0509803922)]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestMenu;
