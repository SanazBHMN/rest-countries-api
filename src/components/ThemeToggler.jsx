import React, { useContext } from "react";
import ThemeContext from "../libs/Context";

function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  const handleThemeToggle = (e) => {
    e.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button className="theme-toggler" onClick={handleThemeToggle}>
      <span>
        {theme === "light" ? "🌞" : "🔅"}
      </span>
    </button>
  );
}

export default ThemeToggler;
