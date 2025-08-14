import { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantHeader from "../components/RestaurantHeader";
import ShimmerMenu from "../components/ShimmerMenu";
import MenuItem from "../components/MenuItem";
import MenuTitle from "../components/MenuTitle";
import NestedMenu from "../components/NestedMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import VegNonVegToggle from "../components/VegNonVegToggle";
import ToggleBtn from "../components/ToggleBtn";

const RestMenu = () => {
  const [isOpen, setIsOpen] = useState(0);

  const { restId } = useParams();
  const MenuInfo = useRestaurantMenu(restId);
  const MenuHeaderInfo = MenuInfo?.cards[2]?.card?.card?.info;

  // const MenuCategoryData =
  //   MenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
  //     (card) =>
  //       card?.card?.card?.["@type"] ===
  //         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
  //       card?.card?.card?.["@type"] ===
  //         "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  //   );
  const menuCategory =
    MenuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const MenuCategoryData = menuCategory?.filter((card) => {
    const type = card?.card?.card?.["@type"];
    return (
      type?.endsWith("ItemCategory") || type?.endsWith("NestedItemCategory")
    );
  });

  const [isVegOn, setIsVegOn] = useState(false);
  const [isNonVegOn, setIsNonVegOn] = useState(false);

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
          <div className="flex space-x-6 pt-3">
            <ToggleBtn
              isOn={isVegOn}
              lable="Veg"
              onToggle={() => setIsVegOn((prev) => !prev)}
              onColor="bg-green-400"
            />
            <ToggleBtn
              isOn={isNonVegOn}
              lable="Non-Veg"
              onToggle={() => setIsNonVegOn((prev) => !prev)}
              onColor="bg-red-400"
            />
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
                  // onClick={() =>
                  //   setIsOpen((prev) => (prev === index ? null : index))
                  // }
                  setIsOpen={() =>
                    setIsOpen((prev) => (prev === index ? null : index))
                  }
                />
                {menu?.card?.card?.categories?.length > 0 ? (
                  <NestedMenu
                    Categories={menu?.card?.card?.categories}
                    showItems={index === isOpen ? true : false}
                  />
                ) : (
                  <MenuItem
                    showItems={index === isOpen ? true : false}
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
