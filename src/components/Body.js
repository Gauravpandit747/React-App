import { useState, useEffect } from "react";
import { restaurants_list } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

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

  const handleOnChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  if (!allRestaurants) return null;

  // if (Filteredrestaurants.length === 0) {
  //   return <h1> No restaurants match your filter...</h1>;
  // }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // handleOnChangeSearchText(e);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredrestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {Filteredrestaurants.map((restaurant, index) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
