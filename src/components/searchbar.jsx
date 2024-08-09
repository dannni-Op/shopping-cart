import { FaSearch } from "react-icons/fa";

export function SearchBar() {
  return (
    <>
      <section className="w-full">
        <form className="w-full">
          <input
            type="search"
            className="p-4 w-full rounded-xl"
            placeholder="Enter product name..."
          />
        </form>
        {/* <FaSearch className="text-2xl text-slate-300" /> */}
      </section>
    </>
  );
}
