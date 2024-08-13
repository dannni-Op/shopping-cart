import { useContext, useState } from "react";
import { CartContext } from "../contexts/cart";
import { FaShoppingCart } from "react-icons/fa";
import { CartItem } from "../components/cartItem";
import { motion } from "framer-motion";
import { childVariants } from "../motions/motions";

export function Cart() {
  const { cartItems, addValue, reduceValue } = useContext(CartContext);

  const total = cartItems.reduce((acc, curr) => {
    return curr.quantity * curr.price + acc;
  }, 0);

  return (
    <>
      <motion.div
        initial="initial"
        animate="final"
        variants={childVariants}
        exit="exit"
      >
        <section className="w-full h-screen px-8 pt-8 text-slate-800 pb-20 md:pb-24 lg:pb-8 lg:ps-32 flex justify-between flex-col gap-8">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl sm:text-3xl">Shopping Cart</h1>
            <FaShoppingCart className="text-2xl sm:text-3xl" />
          </div>
          <div className="h-3/4 w-full overflow-auto">
            <div className="divide-y">
              {cartItems.map((e, i) => {
                return <CartItem data={e} key={i} />;
              })}
            </div>
          </div>
          <div>
            <div class="flex justify-between text-base sm:text-lg font-medium text-gray-900">
              <p>Subtotal</p>
              <p>{cartItems.length > 0 && "$" + total}</p>
            </div>
            <p class="mt-0.5 text-sm sm:text-lg text-gray-500">
              Shipping and calculated at checkout.
            </p>
            <div class="mt-6">
              <button class="text-base sm:text-lg w-full flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-blue-600">
                Checkout
              </button>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
