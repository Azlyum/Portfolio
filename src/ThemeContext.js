import React, { createContext, useState, useEffect, useContext } from "react";

// Create context
export const ThemeContext = createContext();

// Context Provider component
export const ThemeProvider = ({ children }) => {
  // State to track current theme ('light' or 'dark')
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme); // Save theme preference in local storage
    setTheme(newTheme); // Update state
  };

  // Effect to set theme based on local storage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // CSS class based on theme
  const themeClass = theme === "dark" ? "dark" : "";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${themeClass}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const ThemedComponent = ({ lightStyles, darkStyles, children }) => {
  const { theme } = useContext(ThemeContext);

  // Determine styles based on current theme
  const styles = theme === "dark" ? darkStyles : lightStyles;

  return <div style={styles}>{children}</div>;
};
