import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/cart";

export function Navbar({ active }) {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div className="w-full lg:w-20 lg:py-0 py-2 md:py-3 bg-blue-500 rounded-t-xl lg:rounded-l-none lg:rounded-r-xl flex lg:flex-col justify-evenly items-center text-white absolute bottom-0 lg:top-0 lg:my-8 font-medium">
        <Link
          to="/"
          className="text-md sm:text-lg hover:bg-white hover:text-blue-500 py-2 px-3 rounded-lg flex items-center gap-2 lg:-rotate-90"
        >
          <IoMdHome className="sm:text-xl text-xl" />
          Home
        </Link>
        <Link
          to="/carts"
          className="text-md sm:text-lg hover:bg-white hover:text-blue-500 py-2 px-3 rounded-lg flex items-center gap-2 lg:-rotate-90"
        >
          <FaShoppingCart className="sm:text-lg text-md" />
          Cart {cartItems.length !== 0 && `(${cartItems.length})`}
        </Link>
        <Link
          to="/settings"
          className="text-md sm:text-lg hover:bg-white hover:text-blue-500 py-2 px-3 rounded-lg flex items-center gap-2 lg:-rotate-90 "
        >
          <IoMdSettings className="sm:text-lg text-md" />
          Settings
        </Link>
      </div>
    </>
  );
}
