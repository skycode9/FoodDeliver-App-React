import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantHeader from "../components/RestaurantHeader";
import { MENU_URL } from "../utils/comman";
import ShimmerMenu from "../components/ShimmerMenu";

import MenuItem from "../components/MenuItem";
import MenuTitle from "../components/MenuTitle";

const RestMenu = () => {
  const { restId } = useParams();
  const [restInfo, setRestInfo] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(0);

  const fetchRestMenuData = async () => {
    try {
      setIsLoading(true);

      const data = await fetch(MENU_URL + restId);
      const json = await data.json();
      console.log(json);
      const restaurantHeader = json?.data?.cards[2]?.card?.card?.info;
      console.log(restaurantHeader);

      // Extract menu categories
      const menuCategories =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (card) =>
            card?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            card?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );

      console.log("Menu Categories:", menuCategories);
      setMenuData(menuCategories);
      setRestInfo(restaurantHeader);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRestMenuData();
  }, [restId]);

  if (isLoading || restInfo.length === 0) {
    return (
      <div>
        <ShimmerMenu />
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-[800px] min-h-[800px] mt-5 mx-auto">
        <RestaurantHeader restaurantHeaderInfo={restInfo} />
        <div>
          <div className="flex justify-center flex-row items-center pt-[32px] px-0 pb-[16px] h-full w-full">
            <div className="mx-[4px] my-0 tracking-[4px] font-[Gilroy] font-semibold text-[30px] leading-[17px] text-[rgba(2,_6,_12,_0.6)]">
              Menu
            </div>
          </div>

          <div className="h-[0.5px] bg-[rgba(2,_6,_12,_0.15)] w-[calc(100% - 32px)] mx-[auto] my-[24px]" />

          <div className="relative">
            {menuData.map((menu, index) => (
              <div className="max-w-[800px] mx-auto">
                <MenuTitle
                  MenuTitle={menu?.card?.card?.title}
                  MenuLength={menu?.card?.card?.itemCards?.length}
                  onClick={() => setIsOpen(index)}
                  key={menu?.card?.card?.categoryId || index}
                />
                <MenuItem
                  openStatus={isOpen}
                  indexData={index}
                  MenuSubData={menu?.card?.card?.itemCards}
                  key={menu?.card?.card?.itemCards.id || index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestMenu;
