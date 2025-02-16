import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const InstaMart = lazy(() => import("./components/Instamart/InstaMart"));
const About = lazy(() => import("./components/About"));

const AppComponent = () => {
  const [user, setUser] = useState({
    name: "Gaurav",
    email: "gaurav@gmail.com",
  });

  return (
    <>
      <UserContext.Provider value={{user:user}}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1> About page is loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "",
    element: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
