import React from "react";
import { useState } from "react";
const Filter = () => {
  const [filter, setFilter] = useState(false);

  const handleFilter = (e) => {
    if (filter) {
      console.log("Filter has been closed");
      setFilter(false);
    } else {
      setFilter(true);
      console.log("item has been opened");
    }
  };

  return (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer ml-2 hover:border-2 p-1 hover:rounded-md"
        onClick={handleFilter}
      >
        <path fill="currentColor" d="M10 20v-7L2.95 4h18.1L14 13v7z" />
      </svg>
    </>
  );
};

export default Filter;
