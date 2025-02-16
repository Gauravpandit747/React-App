import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { ALL_RESTAURANTS_URL } from "../config"
 
const Body = () => {
  const [Filteredrestaurants, setFilteredrestaurants] = useState([]);
  const [allRestaurants, setallRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("Render()");
    getAPIData();
  }, []);

  async function getAPIData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0595596&lng=72.8295287&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setallRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredrestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>
      Offline, Please check your internet connection!!
    </h1>
  }


  // if (Filteredrestaurants.length === 0) {
  //   return <h1> No restaurants match your filter...</h1>;
  // }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-amber-100 my-5">
        <input
          type="text"
          className="bg-white focus:bg-green-200 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // handleOnChangeSearchText(e);
          }}
        />
        <button
          className="p-2 m-2 bg-amber-200 rounded-md hover:bg-amber-300"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredrestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {Filteredrestaurants.map((restaurant, index) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
