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
        <button onClick={toggleTheme} className="mx-2 focus:outline-none">
          {theme === "light" ? (
            <span className="text-gray-400">🌙</span>
          ) : (
            <span className="text-gray-400">☀️</span>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
