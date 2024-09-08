import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ThemeToggler = ({ borderDark, ...props }) => {
  useEffect(() => {
    if (!theme) {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <motion.div
      {...props}
      className="d-flex align-items-center m-2 border rounded-circle px-1 hover-pointer"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
    >
      {isDark ? (
        <i className="bi bi-moon"></i>
      ) : (
        <i className="bi bi-brightness-high"></i>
      )}
    </motion.div>
  );
};

export default ThemeToggler;
