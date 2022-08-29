import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setisDarkMode] = useState(true);
  const [light, setisLight] = useState(true);
  const toggleTheme = () => {
    setisDarkMode(!isDarkMode);
    setisLight(!light);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, light }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
