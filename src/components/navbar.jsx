import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/cart";

export function Navbar({ active }) {
  const { cartItems } = useContext(CartContext);
  const location = useLocation();
  return (
    <>
      <div className="w-full lg:w-20 lg:py-0 py-2 md:py-3 bg-blue-500 rounded-t-xl lg:rounded-l-none lg:rounded-r-xl flex lg:flex-col justify-evenly items-center text-white absolute bottom-0 lg:top-0 lg:my-8 font-medium">
        <Link
          to="/"
          className={`text-sm md:text-base lg:text-lg xl:text-xl hover:bg-white hover:text-blue-500 py-2 px-3 rounded-lg flex items-center gap-2 lg:-rotate-90 ${
            location.pathname === "/" && "bg-white text-blue-500"
          }`}
        >
          <IoMdHome className="text-lg md:text-xl lg:text-2xl xl:text-xl" />
          Home
        </Link>
        <Link
          to="/carts"
          className={`text-sm md:text-base lg:text-lg xl:text-xl hover:bg-white hover:text-blue-500 py-2 px-3 rounded-lg flex items-center gap-2 lg:-rotate-90 ${
            location.pathname === "/carts" && "bg-white text-blue-500"
          }`}
        >
          <FaShoppingCart className="text-sm md:text-base lg:text-lg xl:text-xl" />
          Cart
          <p>{cartItems.length !== 0 && `(${cartItems.length})`}</p>
        </Link>
        <Link
          to="/settings"
          className={`text-sm md:text-base lg:text-lg xl:text-xl hover:bg-white hover:text-blue-500 py-2 px-3 rounded-lg flex items-center gap-2 lg:-rotate-90 ${
            location.pathname === "/settings" && "bg-white text-blue-500"
          }`}
        >
          <IoMdSettings className="text-sm md:text-base lg:text-lg xl:text-xl" />
          Settings
        </Link>
      </div>
    </>
  );
}
