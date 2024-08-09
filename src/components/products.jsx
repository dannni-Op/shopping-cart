import { useState } from "react";
import { SearchBar } from "./searchbar";
import DATA from "../data/data";
import { Card } from "./card";
import { GiFruitBowl } from "react-icons/gi";

export function Products() {
  const [products, setProducts] = useState(DATA);

  return (
    <>
      <main className="w-full h-full bg-slate-50 p-8">
        <SearchBar />
        <section className="h-3/4 overflow-auto my-4 pb-1">
          <div className="grid grid-cols-2 gap-6">
            {products.map((e, i) => {
              return <Card data={e} key={i} />;
            })}
          </div>
        </section>
        <div className="text-slate-400 py-2 flex gap-2 border border-x-0">
          <button class="items-center gap-2 flex h-full text-blue-500 text-md font-medium px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-200">
            <GiFruitBowl className="text-xl" />
            Fruits
          </button>
          <button class="flex items-center gap-2 h-full text-blue-500 text-md font-medium px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-200">
            <GiFruitBowl className="text-xl" />
            Vegetables
          </button>
        </div>
      </main>
    </>
  );
}
