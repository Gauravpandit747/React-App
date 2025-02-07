import { useState } from "react";
import { restaurants_list } from "../config";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText) {
  return restaurants_list.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurants_list);
  const [searchText, setSearchText] = useState(""); // To create State variables

  const handleOnChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
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
            if (searchText !== "") {
              const data = filterData(searchText);
              setRestaurants(data);
            } else {
              setRestaurants(restaurants_list);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
