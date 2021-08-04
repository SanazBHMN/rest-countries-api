import React, { useContext } from "react";
import ThemeContext from "../libs/Context";

function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  
  return (
    <div className="theme-toggler">
      <button
        className="btn-toggle"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <i className={theme === "dark" ? "fa fa-sun-o" : "fa fa-moon-o"}></i>
      </button>
    </div>
  );
}

export default ThemeToggler;
