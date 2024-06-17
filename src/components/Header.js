import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <header
      className={`sticky top-0 bg-gradient-to-r ${
        theme === "light"
          ? "from-teal-400 to-blue-500 text-white"
          : "from-gray-900 to-gray-800  text-white"
      } p-4 justify-between items-center shadow-lg z-50`}
    >
      <h1 className="text-2xl font-bold" id="home">
        Dyllan Marais Portfolio
      </h1>
      <nav>
        <a href="#Home" className="mx-2 hover:text-gray-200">
          Home
        </a>
        <a href="#Projects" className="mx-2 hover:text-gray-200">
          Projects
        </a>
        <a href="#Experience" className="mx-2 hover:text-gray-200">
          Experience
        </a>
        <a href="#Skills" className="mx-2 hover:text-gray-200">
          Skills
        </a>
        <a href="#Contact" className="mx-2 hover:text-gray-200">
          Contact
        </a>
        <label className="switch mx-2">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider"></span>
        </label>
      </nav>
    </header>
  );
};

export default Header;
