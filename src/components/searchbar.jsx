import { FaSearch } from "react-icons/fa";

export function SearchBar() {
  return (
    <>
      <section className="w-full">
        <form className="w-full relative">
          <input
            type="search"
            className="text-base sm:text-xl p-4 w-full rounded-xl shadow ps-14"
            placeholder="Enter product name..."
          />
          <FaSearch className="text-lg sm:text-xl text-slate-300 absolute top-1/3 left-6" />
        </form>
      </section>
    </>
  );
}
