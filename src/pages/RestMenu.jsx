import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerMenu from "../components/ShimmerMenu";
import RestaurantHeader from "../components/RestaurantHeader";
import MenuSearchBar from "../components/MenuSearchBar";
import MenuContainer from "../components/MenuContainer";
import { MENU_URL } from "../utils/comman";

const RestMenu = () => {
  const { restId } = useParams();

  const [restInfo, setRestInfo] = useState(null);
  const [menuInfo, setMenuInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(MENU_URL + restId);
      const json = await data.json();

      console.log(json);

      const restData = json?.data?.cards[2]?.card?.card?.info;
      const restMenuData =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      setRestInfo(restData);
      setMenuInfo(restMenuData);

      console.log(restMenuData);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [restId]);

  if (isLoading) {
    return <ShimmerMenu />;
  }

  if (!restInfo) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl text-gray-600">Restaurant not found</h2>
        <p className="text-gray-500 mt-2">Please try again later</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <RestaurantHeader restInfo={restInfo} />
      
      <MenuSearchBar 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
      />
      
      <MenuContainer menuInfo={menuInfo} />
    </div>
  );
};

export default RestMenu;
