import { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantHeader from "../components/RestaurantHeader";
import ShimmerMenu from "../components/ShimmerMenu";
import MenuItem from "../components/MenuItem";
import MenuTitle from "../components/MenuTitle";
import NestedMenu from "../components/NestedMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
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

  console.log("menucate", MenuCategoryData);

  // Veg-NonVeg Toggle
  const [selected, setSelected] = useState(null);
  const handleVegToggle = () => {
    setSelected((prev) => (prev === "VEG" ? null : "VEG"));
  };
  const handleNonVegToggle = () => {
    setSelected((prev) => (prev === "NONVEG" ? null : "NONVEG"));
  };

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
              isOn={selected === "VEG"}
              lable="Veg"
              onToggle={handleVegToggle}
              onColor="bg-green-400"
            />
            <ToggleBtn
              isOn={selected === "NONVEG"}
              lable="Non-Veg"
              onToggle={handleNonVegToggle}
              onColor="bg-red-400"
            />
          </div>

          <div className="h-[0.5px] bg-[rgba(2,_6,_12,_0.15)] w-[calc(100% - 32px)] mx-[auto] my-[24px]" />

          <div className="relative">
            {MenuCategoryData.map((menu, index) => {
              // Check if it's a nested menu
              const isNestedMenu = menu?.card?.card?.categories?.length > 0;
              
              if (isNestedMenu) {
                // For nested menus, check if any category has filtered items
                const hasFilteredItems = menu?.card?.card?.categories?.some(category => {
                  const categoryItems = category?.itemCards || [];
                  const filteredCategoryItems = selected === null
                    ? categoryItems
                    : categoryItems.filter(item =>
                        item?.card?.info?.itemAttribute?.vegClassifier === selected
                      );
                  return filteredCategoryItems.length > 0;
                });
                
                if (!hasFilteredItems) return null;
              } else {
                // For simple menus
                const itemCards = menu?.card?.card?.itemCards || [];
                const filteredData = selected === null
                  ? itemCards
                  : itemCards.filter(item =>
                      item?.card?.info?.itemAttribute?.vegClassifier === selected
                    );
                
                if (!filteredData || filteredData.length === 0) return null;
              }

              // Calculate menu length for display
              const menuLength = isNestedMenu 
                ? menu?.card?.card?.categories?.reduce((total, category) => {
                    const categoryItems = category?.itemCards || [];
                    const filteredCategoryItems = selected === null
                      ? categoryItems
                      : categoryItems.filter(item =>
                          item?.card?.info?.itemAttribute?.vegClassifier === selected
                        );
                    return total + filteredCategoryItems.length;
                  }, 0)
                : (selected === null
                    ? menu?.card?.card?.itemCards?.length || 0
                    : menu?.card?.card?.itemCards?.filter(item =>
                        item?.card?.info?.itemAttribute?.vegClassifier === selected
                      )?.length || 0);

              return (
                <div
                  className="max-w-[800px] mx-auto"
                  key={menu?.card?.card?.categoryId}
                >
                  <MenuTitle
                    MenuTitle={menu?.card?.card?.title}
                    MenuLength={menuLength}
                    setIsOpen={() =>
                      setIsOpen((prev) => (prev === index ? null : index))
                    }
                  />
                  {isNestedMenu ? (
                    <NestedMenu
                      Categories={menu?.card?.card?.categories}
                      showItems={index === isOpen ? true : false}
                      selected={selected}
                    />
                  ) : (
                    <MenuItem
                      showItems={index === isOpen ? true : false}
                      MenuSubData={selected === null
                        ? menu?.card?.card?.itemCards
                        : menu?.card?.card?.itemCards?.filter(item =>
                            item?.card?.info?.itemAttribute?.vegClassifier === selected
                          )}
                      selected={selected}
                    />
                  )}
                  <div className="h-[16px] border-b-[16px_solid_rgba(2,_6,_12,_.0509803922)]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestMenu;
