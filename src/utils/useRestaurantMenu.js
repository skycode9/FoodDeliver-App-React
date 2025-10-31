import { useEffect, useState } from "react";
import { MENU_URL } from "./comman";

const useRestaurantMenu = (restId) => {
  const [menuInfo, setMenuInfo] = useState(null);

  const fetchMenuData = async () => {
    try {
      // Try API first, fallback to mock data if fails
      try {
        console.log("Fetching menu for restaurant:", restId);

        const response = await fetch(`/api/menu?restaurantId=${restId}`);

        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error(`Menu API failed with status ${response.status}`);
        }

        const json = await response.json();
        console.log("API Response:", json);
        
        if (json.data) {
          setMenuInfo(json.data);
          return;
        }
      } catch (apiError) {
        console.error("Menu API failed, using mock data:", apiError);
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
