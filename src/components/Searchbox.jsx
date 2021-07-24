import React from "react";

function Searchbox() {
  return (
    <div className="search">
      <div className="searchbox">
        {/* <i className="fas fa-search"></i> */}
        <input
          className="search-country"
          type="search"
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
}

export default Searchbox;
