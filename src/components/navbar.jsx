import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

export function Navbar({ active }) {
  return (
    <>
      <nav className="w-full py-2 bg-blue-500 rounded-t-xl flex justify-evenly items-center text-white absolute bottom-0 font-medium">
        <Link
          to="/"
          className="text-md sm:text-2xl hover:bg-white hover:text-blue-500 py-2 px-3 rounded-lg flex items-center gap-2"
        >
          <IoMdHome className="sm:text-3xl text-xl" />
          Home
        </Link>
        <Link
          to="/carts"
          className="text-md sm:text-2xl hover:bg-white hover:text-blue-500 py-2 px-3 rounded-lg flex items-center gap-2"
        >
          <FaShoppingCart className="sm:text-2xl text-md" />
          Cart
        </Link>
        <Link
          to="/settings"
          className="text-md sm:text-2xl hover:bg-white hover:text-blue-500 py-2 px-3 rounded-lg flex items-center gap-2"
        >
          <IoMdSettings className="sm:text-2xl text-md" />
          Settings
        </Link>
      </nav>
    </>
  );
}
