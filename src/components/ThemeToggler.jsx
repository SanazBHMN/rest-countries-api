import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import ThemeContext from "../libs/Context";

function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  const bg =
    theme === "dark"
      ? "body {background-color: hsl(207, 26%, 17%); color: hsl(0, 0%, 100%)}"
      : "body {background-color: hsl(0, 0%, 98%); color: hsl(200, 15%, 8%)}";

  return (
    <button
      className="theme-toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Helmet>
        <style>{bg}</style>
        <span>{bg === "light" ? "🌞" : "🔅"}</span>
      </Helmet>
    </button>
  );
}

export default ThemeToggler;
