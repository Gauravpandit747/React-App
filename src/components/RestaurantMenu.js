import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const {restaurantName, menuList} =  useRestaurant(id);
  useEffect(() => {
  }, [id]);

  // useEffect(() => {
  //   console.log("Updated menuList:", menuList);
  // }, [menuList]); // Log menuList when it updates

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
