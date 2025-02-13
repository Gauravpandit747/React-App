import { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router";
import useOnline from "../utils/useOnline";

const loggedInUser = () => {
  return true;
};

const Title = () => {
  return (
    <Link to="/">
      <img alt="logo" className="logo" src={logo}></img>
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <li>Cart</li>
          <Link to="/instamart">InstaMart</Link>
        </ul>
      </div>
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
