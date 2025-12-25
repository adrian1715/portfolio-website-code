import React from "react";
import styles from "../../pages/Homepage.module.css";
import { motion } from "framer-motion";
import DownloadButton from "../DownloadButton";

export default function Home() {
  return (
    <main>
      <section id="home" className={styles.section}>
        <div className="row justify-content-center">
          <div className="col-auto text-center mb-4 mb-md-0 me-md-4">
            <img
              src="/images/me.jpg"
              id="home-profile-image"
              className="rounded-circle img-fluid"
              style={{ maxHeight: "60vh" }}
            />
          </div>
          <div className="row col-auto col-md-6 justify-content-between ms-md-4">
            <div id="home-text" className="text-lg-cente col-10 my-auto">
              <h1 id="home-title">Adrian Lobato</h1>
              <h2 id="home-subtitle" className="mb-lg-4">
                Full-Stack Developer
              </h2>
              <p className="mb-lg-4">
                Welcome to my website. It's an honor to have you here! I hope
                you enjoy the content and that I can contribute with my
                experience and skills.
              </p>
              <div className="w-100 row">
                <div className="col-sm-6 col-md-12 col-xl-6 px-xl-1 p-xxl-auto">
                  <a
                    href="#contact"
                    className={`mb-1 mb-xl-0 btn btn-primary px-xl-0 px-xxl-auto py-xl-3 w-100 ${styles.buttonText}`}
                  >
                    Get in touch <i className="bi bi-send-fill ms-2"></i>
                  </a>
                </div>
                <div className="col-sm-6 col-md-12 col-xl-6 px-xl-1 p-xxl-auto">
                  <DownloadButton
                    className={`btn btn-secondary px-xl-0 px-xxl-auto py-xl-3 w-100 ${styles.buttonText}`}
                    pdfUrl="/cv.pdf"
                    fileName="CV.pdf"
                  >
                    Download CV
                    <i className="bi bi-file-earmark-text-fill ms-2"></i>
                  </DownloadButton>
                </div>
              </div>
            </div>
            <ul
              id="socials"
              className="list-unstyled d-flex flex-column justify-content-center align-items-end col-1 pe-0"
            >
              <motion.li
                className="mb-1"
                style={{ width: "fit-content" }}
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.75, scale: 1.1 }}
              >
                <a
                  href="https://www.linkedin.com/in/adrian-lobato/"
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  <i className={`bi bi-linkedin fs-1`}></i>
                </a>
              </motion.li>
              <motion.li
                className="mb-1"
                style={{ width: "fit-content" }}
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.75, scale: 1.1 }}
              >
                <a
                  href="https://github.com/adrian1715"
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  <i className={`bi bi-github fs-1`}></i>
                </a>
              </motion.li>
              <motion.li
                className="mb-1"
                style={{ width: "fit-content" }}
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.75, scale: 1.1 }}
              >
                <a
                  href="mailto:adrian40001@gmail.com"
                  style={{ color: "inherit" }}
                >
                  <i className={`bi bi-envelope-fill fs-1`}></i>
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
