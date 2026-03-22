import React, { useState, useEffect } from "react";

const ThemeToggle = () => {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;