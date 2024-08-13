import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FilterContext } from "../contexts/filter";

export function SearchBar() {
  const { search, setSearch } = useContext(FilterContext);

  return (
    <>
      <section className="w-full">
        <div className="w-full relative">
          <input
            type="search"
            className="text-base p-4 w-full rounded-xl shadow ps-14"
            placeholder="Enter product name..."
            value={search}
            onChange={(e) => {
              e.preventDefault();
              setSearch(e.target.value);
            }}
          />
          <FaSearch className="text-lg sm:text-xl text-slate-300 absolute top-1/3 left-6" />
        </div>
      </section>
    </>
  );
}
