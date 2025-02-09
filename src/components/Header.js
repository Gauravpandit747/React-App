import { useState } from "react";
import logo from "../assets/img/logo.png";
const loggedInUser = () => {
  return true;
}

const Title = () => {
    return (
      <a href="/">
        <img
          alt="logo"
          className="logo"
          src={logo}
        ></img>
      </a>
    );
  };
  
  const Header = () => {
    const [isLoggedIn, setisLoggedIn ] = useState(false);

     return (
       <div className="header">
         <Title />
         <div className="nav-items">
           <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
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