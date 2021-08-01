import React from "react";

function Searchbox({ input, search }) {
  return (
    <div className="search">
      <div className="searchbox">
        <i className="fas fa-search"></i>
        {/* <ion-icon name="search-outline"></ion-icon> */}
        <input
          className="search-country"
          type="search"
          placeholder="Search for a country..."
          value={input}
          onChange={search}
        />
      </div>
    </div>
  );
}

export default Searchbox;
