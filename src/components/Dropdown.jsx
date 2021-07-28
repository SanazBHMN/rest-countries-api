import React from "react";

function Dropdown() {
  return (
    <div className="dropdown">
      <p className="dropdown-text">Filter by Region</p>
      <div className="dropdown-content">
        <a href="#">Africa</a>
        <a href="#">America</a>
        <a href="#">Asia</a>
        <a href="#">Europe</a>
        <a href="#">Oceania</a>
      </div>
    </div>
  );
}

export default Dropdown;
