import { useEffect } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/store/userSclice";
import { clearCart } from "../utils/store/cartSlice";

const Title = () => {
  return (
    <Link to="/">
      <img alt="logo" className="h-28 pl-2" src={logo}></img>
    </Link>
  );
};

const Header = () => {
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const userData = useSelector((store) => store?.user?.userData);
  const dispatch = useDispatch();

  useEffect(() => {
  }, [isLoggedIn, userData]);

  const cartItems = useSelector((store) => store.cart.items);

  const logOut = () => {
    dispatch(removeUser());
    dispatch(clearCart());
  };

  return (
    <div className="flex justify-between items-center bg-amber-100 shadow-lg px-6 py-4">
      <Title />

      <nav className="nav-items">
        <ul className="flex space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-amber-600 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-amber-600 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-amber-600 transition">
            Contact
          </Link>
          {isLoggedIn && (
            <Link to="/cart" className="hover:text-amber-600 transition">
              Cart - {cartItems.length}
            </Link>
          )}

          <Link  to={isLoggedIn ? "/instamart":'#'} className="hover:text-amber-600 transition">
            InstaMart
          </Link>
          {isLoggedIn ? (
            <Link
              to="/login"
              onClick={logOut}
              className="hover:text-amber-600 transition"
            >
              Logout
            </Link>
          ) : (
            <Link to="/login" className="hover:text-amber-600 transition">
              Login
            </Link>
          )}

          {!isLoggedIn ? (
            <Link
              to="/register"
              onClick={logOut}
              className="hover:text-amber-600 transition"
            >
              Register
            </Link>
          ) : (
            <Link to="" className="hover:text-amber-600 transition"></Link>
          )}
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        <Link to="/edituser">
          {isLoggedIn ? (
            <span className="font-bold text-xl text-amber-600">
              {userData.username}
            </span>
          ) : (
            ""
          )}
        </Link>        
      </div>
    </div>
  );
};

export default Header;
