import { createContext, useState } from "react";
import DATA from "../data/data";

export const FilterContext = createContext(null);

export function FilterProvider({ children }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  //regex saya tidak paham :(
  function searchItems() {
    // Convert search string to a regular expression pattern
    const pattern = search
      ? new RegExp(search.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"), "i") // Escape special characters and make it case-insensitive
      : null;

    if (!pattern) {
      // If search is empty, show all items
      setData(DATA);
    } else {
      // Filter data based on the regex pattern
      const temp = DATA.filter((e) => pattern.test(e.name));
      setData(temp);
    }
  }

  const [data, setData] = useState(DATA);

  return (
    <>
      <FilterContext.Provider value={{ data, search, setSearch, searchItems }}>
        {children}
      </FilterContext.Provider>
    </>
  );
}
