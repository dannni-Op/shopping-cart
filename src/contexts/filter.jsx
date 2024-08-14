import { createContext, useState } from "react";
import DATA from "../data/data";

export const FilterContext = createContext(null);

export function FilterProvider({ children }) {
  const [data, setData] = useState(DATA);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    fruits: true,
    vegetables: true,
  });

  //regex saya tidak paham :(
  // function searchItems() {
  //   let items = DATA;
  //   // Convert search string to a regular expression pattern
  //   const pattern = search
  //     ? new RegExp(search.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"), "i") // Escape special characters and make it case-insensitive
  //     : null;

  //   if (!pattern) {
  //     // If search is empty, show all items
  //     // setData(DATA);
  //     items = DATA;
  //   } else {
  //     // Filter data based on the regex pattern
  //     const temp = DATA.filter((e) => pattern.test(e.name));
  //     // setData(temp);
  //     items = temp;
  //   }

  //   if (!filter.vegetables && !filter.fruits) {
  //     setData(items);
  //     return;
  //   }

  //   if (!filter.fruits) {
  //     items = items.filter((e) => e.category !== "fruits");
  //   }

  //   if (!filter.vegetables) {
  //     items = items.filter((e) => e.category !== "vegetables");
  //   }

  //   setData(items);
  // }

  //refactor from AI
  function searchItems() {
    // Convert search string to a regular expression pattern
    const pattern = search
      ? new RegExp(search.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"), "i") // Escape special characters and make it case-insensitive
      : null;

    // Filter items based on search pattern
    let filteredItems = pattern
      ? DATA.filter((item) => pattern.test(item.name))
      : DATA;

    // Further filter based on category filter
    filteredItems = filteredItems.filter((item) => {
      // If both filters are true, include the item
      if (filter.fruits && item.category === "fruits") return true;
      if (filter.vegetables && item.category === "vegetables") return true;
      // If neither filter is true, exclude the item
      return false;
    });

    // Update the state with the filtered data
    setData(filteredItems);
  }

  return (
    <>
      <FilterContext.Provider
        value={{
          data,
          search,
          setSearch,
          searchItems,
          filter,
          setFilter,
        }}
      >
        {children}
      </FilterContext.Provider>
    </>
  );
}
