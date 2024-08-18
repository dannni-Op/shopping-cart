import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { SearchBar } from "../components/searchbar";
import { Card } from "../components/card";
import { GiFruitBowl } from "react-icons/gi";
import { childVariants } from "../motions/motions";
import { CartContext } from "../contexts/cart";
import { FilterContext } from "../contexts/filter";
import { FaSearch } from "react-icons/fa";

export function Home() {
  const { data, search, searchItems, filter, setFilter } =
    useContext(FilterContext);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    searchItems();
  }, [search, filter]);

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
          <section className="relative w-full h-screen px-8 flex flex-col justify-between pt-8 pb-2 lg:pb-8 lg:ps-32">
            <SearchBar />
            <section className="h-4/5 w-full my-4 pb-1 overflow-auto">
              {data.length > 0 ? (
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 max-w-full gap-6 justify-items-center items-center">
                  {data.map((e) => {
                    return <Card data={e} key={e.id} />;
                  })}
                </div>
              ) : (
                <section className="flex flex-col items-center gap-2 h-full justify-center">
                  <FaSearch className="text-6xl md:text-7xl lg:text-8xl text-blue-500 mb-3" />
                  <h2 className="text-lg md:text-2xl md:text-3xl text-blue-500 font-extrabold ">
                    Oops! Product Not Found
                  </h2>
                  <p className="text-xs md:text-base lg:text-md text-slate-400 font-medium ">
                    Change search keywoard or add categories
                  </p>
                </section>
              )}
            </section>
            <div className="text-slate-400 py-2 flex gap-2 border border-x-0">
              <button
                className={`text-sm md:text-base lg:text-md xl:text-lg items-center gap-2 flex h-full text-blue-500 font-medium px-4 py-2 rounded-lg hover:bg-slate-200 ${
                  filter.fruits && "bg-slate-200"
                }`}
                onClick={() => {
                  setFilter({
                    ...filter,
                    fruits: !filter.fruits,
                  });
                }}
              >
                <GiFruitBowl className="text-lg md:text-xl lg:text-xl xl:text-2xl" />
                Fruits
              </button>
              <button
                onClick={() => {
                  setFilter({
                    ...filter,
                    vegetables: !filter.vegetables,
                  });
                }}
                className={`text-sm md:text-base lg:text-md xl:text-lg flex items-center gap-2 h-full text-blue-500 font-medium px-4 py-2 rounded-lg hover:bg-slate-200 ${
                  filter.vegetables && "bg-slate-200"
                }`}
              >
                <GiFruitBowl className="text-lg md:text-xl lg:text-xl xl:text-2xl" />
                Vegetables
              </button>
            </div>
          </section>
        </motion.div>
      </section>
    </>
  );
}
