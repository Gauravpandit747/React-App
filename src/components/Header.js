import { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router";

const loggedInUser = () => {
  return true;
}

const Title = () => {
    return (
        <Link to="/">
        <img
          alt="logo"
          className="logo"
          src={logo}
        ></img>
        </Link>
    );
  };
  
  const Header = () => {
    const [isLoggedIn, setisLoggedIn ] = useState(false);

     return (
       <div className="header">
         <Title />
         <div className="nav-items">
           <ul>
           <Link to="/">Home</Link>
             <Link to="/about">About</Link>
             <Link to="/contact">Contact</Link>
             <li>Cart</li>
           </ul>
         </div>
         {isLoggedIn ? (
           <button onClick={() => setisLoggedIn(false)}>Logout</button>
         ) : (
           <button onClick={() => setisLoggedIn(true)}>Login</button>
         )}
       </div>
     );
  };

export default Header;