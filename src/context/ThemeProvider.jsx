import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// Read theme from localStorage or default to "light"
const getInitialTheme = () =>
  localStorage.getItem("theme") || "light";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme());

  document.documentElement.classList.add(theme);

  const toggleTheme = () => {
    // Use the callback in setTheme to set the new theme
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      // Remove both theme classes first
      document.documentElement.classList.remove("light", "dark");
      // Add the current theme class
      document.documentElement.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
