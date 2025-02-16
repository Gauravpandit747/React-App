import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/store/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurantName, menuList } = useRestaurant(id);
  useEffect(() => {}, [id]);

  const dispatch = useDispatch();

  const handleAddItem = (value) => {
    dispatch(addItem(value));
  };

  // useEffect(() => {
  //   console.log("Updated menuList:", menuList);
  // }, [menuList]); // Log menuList when it updates

  return menuList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <h1 className="font-bold text-2xl m-2 p-2">Restaurant Id: {id}</h1>
      <h1 className="font-bold text-2xl m-2 p-2">
        Restaurant Name: {restaurantName}
      </h1>

      <div className="flex flex-wrap">
        {menuList.map((ele) => (
          <div className="w-56 shadow-lg p-2 m-2">
            <img className="m-2 p-2" src={IMG_CDN_URL + ele?.imageUrl} />
            <h2 className="font-bold xl">{ele.name}</h2>
            <h2> Rs.{ele.price / 100}</h2>
            <h2>{ele.ratings}</h2>
            <div className="flex justify-end">
              <button
                className="border-1 rounded-xl px-2 bg-amber-100"
                onClick={() => handleAddItem(ele)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
