import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About";
import Error from "./components/Error";

const AppComponent = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppComponent/>,
    errorElement:<Error/>,
  },
  {
    path:"/about",
    element:<About/>,
  },
  {
    path:"",
    element:<Error/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
