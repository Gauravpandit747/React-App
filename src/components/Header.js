import { useState } from "react";

const loggedInUser = () => {
  return true;
}

const Title = () => {
    return (
      <a href="/">
        <img
          alt="logo"
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFVXe2Tg6hViwCnFCKGZcfsFyM7TKOCNQKQ&s"
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