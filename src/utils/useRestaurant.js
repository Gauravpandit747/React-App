import { useEffect, useState } from "react";
import { MENU_URL } from "../config";
const useRestaurant = (id) => {
  const [menuList, setmenuList] = useState([]);
  const [restaurantName, setrestaurantName] = useState("");

  useEffect(() => {
    getMenuData(id);
  }, []);

  async function getMenuData() {
    const data = await fetch(MENU_URL + id);
    const jsonData = await data.json();
    const menu = await jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards[1]?.card?.card?.itemCards;
    setrestaurantName(jsonData?.data?.cards[0]?.card?.card?.text);

    let tempMenu = [];

    for (i = 0; i < menu?.length; i++) {
      tempMenu[i] = {
        name: menu[i]?.card?.info?.name,
        price: menu[i]?.card?.info?.price,
        ratings: menu[i]?.card?.info?.ratings.aggregatedRating.rating,
        imageUrl: menu[i]?.card?.info?.imageId,
      };
    }

    setmenuList(tempMenu);
  }
  return { restaurantName, menuList };
};
export default useRestaurant;
