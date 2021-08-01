import React, { useContext } from "react";
import ThemeContext from "../libs/Context";
import ThemeToggler from "./ThemeToggler";

function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="header">
      <h5>Where in the world?</h5>
      <div className="theme-mode">
        <ThemeToggler />
        <span>{theme === "dark" ? "light" : "dark"} Mode</span>
      </div>
    </div>
  );
}

export default Header;
