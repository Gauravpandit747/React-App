import { useState, useContext } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const loggedInUser = () => {
  return true;
};

const Title = () => {
  return (
    <Link to="/">
      <img alt="logo" className="h-28 pl-2" src={logo}></img>
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const isOnline = useOnline();
  const {user} = useContext(UserContext);
  console.log(user, ":::::user")

  return (
    <div className="flex justify-between bg-amber-100 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
          <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
          <li className="px-2">Contact</li>
          </Link>
          <li className="px-2">Cart</li>
          <Link to="/instamart">
          <li className="px-2">InstaMart</li>
          </Link>
        </ul>
      </div>
      <span className="font-bold text-xl p-9 text-amber-600">{user.name}</span>
      {isOnline ? "✅" : "❌"}
      {isLoggedIn ? (
        <button onClick={() => setisLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setisLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
