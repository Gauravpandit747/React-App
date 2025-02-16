import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { clearCart } from "../utils/store/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleclearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <h1 className=" p-2 m-2 text-2xl font-bold">
        Cart Items - {cartItems.length}
      </h1>
      <button onClick={() => handleclearCart()} className="m-2 p-2 border-2">
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((ele) => (
          <div className="w-56 shadow-lg p-2 m-2">
            <img className="m-2 p-2" src={IMG_CDN_URL + ele?.imageUrl} />
            <h2 className="font-bold xl">{ele.name}</h2>
            <h2> Rs.{ele.price / 100}</h2>
            <h2>{ele.ratings}</h2>
          </div>
        ))}
      </div>
      {/* <RestaurantMenu restaurantId={restaurantId} restaurantName = {restaurantName} menuList = {cartItems}></RestaurantMenu> */}
    </>
  );
};

export default Cart;
