import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import Home from "../components/homepage/Home";
import About from "../components/homepage/About";
import ScrollTop from "../components/ScrollTop";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Qualifications from "../components/homepage/Qualifications";
import Experience from "../components/homepage/Experience";
import Portfolio from "../components/homepage/Portfolio";
import Contact from "../components/homepage/Contact";

export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Home - Adrian Lobato</title>
      </Helmet>

      <Home />

      <About />

      <Qualifications />

      <Experience />

      <Portfolio />

      <Contact />

      <ScrollTop />
    </>
  );
}
