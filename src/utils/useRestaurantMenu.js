import { useEffect, useState } from "react";
import { MENU_URL } from "./comman";

const useRestaurantMenu = (restId) => {
  const [menuInfo, setMenuInfo] = useState(null);

  const fetchMenuData = async () => {
    try {
      // Try API first, fallback to mock data if fails
      try {
        console.log("ResURL", MENU_URL + restId);

        const data = await fetch(`/api/menu` + restId);

        console.log("data", data);

        if (!data.ok) {
          throw new Error("Menu API failed");
        }

        const json = await data.json();
        if (json.data) {
          setMenuInfo(json.data);
          return;
        }
      } catch (apiError) {
        console.log("Menu API failed, using mock data:", apiError);
      }

      // Fallback to basic menu structure for demo
      setMenuInfo({
        cards: [
          {
            card: {
              card: {
                info: {
                  name: "Demo Restaurant",
                  cuisines: ["Indian", "Chinese"],
                  avgRating: 4.2,
                  costForTwoMessage: "₹300 for two",
                },
              },
            },
          },
        ],
      });
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  return menuInfo;
};

export default useRestaurantMenu;
