import React, { useState, useEffect } from "react";

const ThemeToggler = () => {
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
    <div className="form-check form-switch d-flex align-items-center m-2">
      <input
        type="checkbox"
        className="form-check-input me-1 hover-pointer"
        role="switch"
        id="flexSwitchCheckDefault"
        checked={isDark}
        onChange={toggleTheme}
      />
      <label
        htmlFor="flexSwitchCheckDefault"
        className="form-check-label me-1 hover-pointer"
      >
        {theme}
      </label>
      {isDark ? (
        <i className="bi bi-moon"></i>
      ) : (
        <i className="bi bi-brightness-high"></i>
      )}
    </div>
  );
};

export default ThemeToggler;
