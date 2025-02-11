import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [menuList, setmenuList] = useState([]);
  const [restaurantName, setrestaurantName] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMenuData();
  }, [id]);

  // useEffect(() => {
  //   console.log("Updated menuList:", menuList);
  // }, [menuList]); // Log menuList when it updates

  async function getMenuData() {
    console.log("getMenuData");
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0595596&lng=72.8295287&submitAction=ENTER&restaurantId=${id}`
    );
    const jsonData = await data.json();
    const menu = await jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards[1]?.card?.card?.itemCards;
    setrestaurantName(jsonData?.data?.cards[0]?.card?.card?.text);
    setmenuList(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
    let tempMenu = [];

    for (i = 0; i < menu?.length; i++) {
      // console.log(menu[i]?.card?.info)
      tempMenu[i] = {
        name: menu[i]?.card?.info?.name,
        price: menu[i]?.card?.info?.price,
        ratings: menu[i]?.card?.info?.ratings.aggregatedRating.rating,
        imageUrl: menu[i]?.card?.info?.imageId,
      };
    }

    await setmenuList(tempMenu);
  }
  return menuList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu-card-container" >
        <h1>Restaurant Id: {id}</h1>
        <h1>Restaurant Name:{restaurantName}</h1>
        {menuList.map((ele) => (
          <div className="menu-card">
             <img className="" src={IMG_CDN_URL + ele?.imageUrl} />
            <h2>{ele.name}</h2>
            <h2>{(ele.price/100)}</h2>
            <h2>{ele.ratings}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
