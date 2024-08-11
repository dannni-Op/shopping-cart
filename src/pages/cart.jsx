import { useContext, useState } from "react";
import { Navbar } from "../components/navbar";
import { CartContext } from "../context/cart";
import { FaShoppingCart } from "react-icons/fa";
import { CartItem } from "../components/cartItem";
import DATA from "../data/data";

export function Cart() {
  const [products, setProducts] = useState(DATA);
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      <Navbar />
      <section className="w-full h-screen px-8 pt-8 text-slate-800 pb-20 flex justify-between flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">Shopping Cart</h1>
          <FaShoppingCart className="text-2xl" />
        </div>
        <div className="h-3/4 w-full overflow-auto">
          <div className="divide-y">
            {products.map((e, i) => {
              return <CartItem data={e} key={i} />;
            })}
          </div>
        </div>
        <div>
          <div class="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p class="mt-0.5 text-sm text-gray-500">
            Shipping and calculated at checkout.
          </p>
          <div class="mt-6">
            <button class="w-full flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
