import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { SearchBar } from "../components/searchbar";
import DATA from "../data/data";
import { Card } from "../components/card";
import { GiFruitBowl } from "react-icons/gi";
import { childVariants } from "../motions/motions";
import { CartContext } from "../contexts/cart";
import { FilterContext } from "../contexts/filter";

export function Home() {
  const { data, search, searchItems } = useContext(FilterContext);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    searchItems();
  }, [search]);

  return (
    <>
      {/* untuk background saya akali seperti ini */}
      <section className="bg-slate-50">
        <motion.div
          initial="initial"
          animate="final"
          exit="exit"
          variants={childVariants}
          layout={false}
        >
          <section className="w-full h-screen px-8 flex flex-col justify-between pt-8 pb-20 md:pb-24 lg:pb-8 lg:ps-32">
            <SearchBar />
            <section className="h-4/5 w-full my-4 pb-1 overflow-auto">
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 max-w-full gap-6">
                {data.map((e) => {
                  return <Card data={e} key={e.id} />;
                })}
              </div>
            </section>
            <div className="text-slate-400 py-2 flex gap-2 border border-x-0">
              <button className="items-center gap-2 flex h-full text-blue-500 text-md sm:text-lg font-medium px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-200">
                <GiFruitBowl className="text-xl" />
                Fruits
              </button>
              <button className="flex items-center gap-2 h-full text-blue-500 text-md sm:text-lg font-medium px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-200">
                <GiFruitBowl className="text-xl " />
                Vegetables
              </button>
            </div>
          </section>
        </motion.div>
      </section>
    </>
  );
}
