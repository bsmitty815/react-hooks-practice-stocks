import React from "react";




function SearchBar({setSortBy, filterBy, sortBy, setFilterBy}) {

  function handleChangeSort(event) {
    setSortBy(event.target.value)
  }

  function handleChangeType(event) {
    setFilterBy(event.target.value)
  }


  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy === "Alphabetically"}
          onChange={handleChangeSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy === "Price"}
          onChange={handleChangeSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select value={filterBy} onChange={handleChangeType}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
