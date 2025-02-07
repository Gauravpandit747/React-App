import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
const heading = React.createElement("h1", { id: "title" }, "Heading 1");

// const heading2 = React.createElement(
//   "h2",
//   { id: "title" },
//   "Heading for parcel"
// );
// const container = React.createElement("div", { id: "container" },  [
//   heading,
//   heading2,
// ]);
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2183307&lng=72.9780897&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
// const jsx = <h1>Hello JSX</h1>;

// const HeadingComponent = () => {
//   return (
//     <div>
//       {console.log("Hello Garry")}
//       {heading}
//       <h1>Hello Functional Component.</h1>
//     </div>
//   );
// };

// Composing Components
const AppComponent = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const restaurantList = [
  {
    name: "Burger-King",
    image: "",
    cuisine: ["Burger", "American"],
    rating: "4.2",
  },
  {
    name: "Burger-King",
    image: "",
    cuisine: ["Burger", "American"],
    rating: "4.2",
  },
  {
    name: "Burger-King",
    image: "",
    cuisine: ["Burger", "American"],
    rating: "4.2",
  },
  {
    name: "Burger-King",
    image: "",
    cuisine: ["Burger", "American"],
    rating: "4.2",
  },
  {
    name: "Burger-King",
    image: "",
    cuisine: ["Burger", "American"],
    rating: "4.2",
  },
  {
    name: "Burger-King",
    image: "",
    cuisine: ["Burger", "American"],
    rating: "4.2",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
