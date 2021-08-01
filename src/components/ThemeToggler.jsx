import React, { useContext } from "react";
import ThemeContext from "../libs/Context";

function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div>
      <button
        className="theme-toggler"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {/* <span>{theme === "light" ? "🌞" : "🔅"}</span> */}
        <i className="fa fa-moon-o"></i>
        <i className="fa fa-spoon"></i>
        {/* <ion-icon name="moon-outline"></ion-icon> */}
      </button>
    </div>
  );
}

export default ThemeToggler;
