import { useEffect, useState } from "react";
import { MENU_URL } from "./comman";

const useRestaurantMenu = (restId) => {
  const [menuInfo, setMenuInfo] = useState(null);

  const fetchMenuData = async () => {
    try {
      const data = await fetch(MENU_URL + restId);
      const json = await data.json();
      setMenuInfo(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  return menuInfo;
};

export default useRestaurantMenu;
