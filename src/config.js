export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const MENU_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0595596&lng=72.8295287&submitAction=ENTER&restaurantId=";

const lat = "19.17448046250659";
const long = "73.23787129790396";

export const ALL_RESTAURANTS_URL =
  `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

export const config = [
  {
    type: "corousel",
    cards: [
      {
        offerName: "50% Off",
      },
      {
        offerName: "No Delivery Charge",
      },
    ],
  },

  {
    type: "restaurants",
    cards: [
      {
        name: "Burger-King",
        image: "",
        cuisine: ["Burger", "American"],
        rating: "4.2",
      },
    ],
  },
];

// All Data
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0595596&lng=72.8295287&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
// Menu
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0595596&lng=72.8295287&restaurantId=15168&catalog_qa=undefined&submitAction=ENTER
