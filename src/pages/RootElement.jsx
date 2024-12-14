import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navLinks } from "../App";
import NavbarNew from "../components/NavbarNew";

export default function RootElement({ children }) {
  // to always use the selected theme
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
    const theme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, []);

  const { pathname } = useLocation();
  const isIndex = pathname === "/";

  return (
    <>
      <Helmet>
        <title>Adrian Lobato</title>
        <link id="favicon" rel="icon" href="favicon.ico" type="image/x-icon" />
      </Helmet>

      {!isIndex ? <Navbar links={navLinks} /> : <NavbarNew links={navLinks} />}
      <div id="container" className={`container${!isIndex ? " mt-4" : ""}`}>
        {children && children}
        <Outlet />
      </div>
    </>
  );
}
