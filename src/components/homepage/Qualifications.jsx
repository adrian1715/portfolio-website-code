import React, { useState } from "react";
import styles from "../../pages/Homepage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faServer, faC } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faNodeJs,
  faNode,
  faPhp,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import Certificates from "./Certificates.jsx";

export default function Skills() {
  const [isShowingList, setIsShowingList] = useState({
    frontend: false,
    backend: false,
    others: false,
    alura: false,
    youtube: false,
    udemy: false,
    symfonyCasts: false,
  });

  const toggleFrontend = () =>
    setIsShowingList((prevState) => ({
      ...prevState,
      frontend: !prevState.frontend,
      backend: false,
      others: false,
      alura: false,
      youtube: false,
      udemy: false,
      symfonyCasts: false,
    }));

  const toggleBackend = () =>
    setIsShowingList((prevState) => ({
      ...prevState,
      backend: !prevState.backend,
      frontend: false,
      others: false,
      alura: false,
      youtube: false,
      udemy: false,
      symfonyCasts: false,
    }));

  const toggleOthers = () =>
    setIsShowingList((prevState) => ({
      ...prevState,
      others: !prevState.others,
      frontend: false,
      backend: false,
      alura: false,
      youtube: false,
      udemy: false,
      symfonyCasts: false,
    }));

  const isShowingSomeList = Object.values(isShowingList).some((value) => value);

  return (
    <section id="qualifications" className={styles.section}>
      <div id="qualifications-header" className={styles.sectionHeader}>
        <h2 id="qualifications-title" className="fs-1">
          Qualifications
        </h2>
        <p id="qualification-subtitle">What I can contribute with</p>
      </div>
      <div id="qualifications-content">
        <div
          id="technologies"
          className="row w-100 flex-column align-items-center mb-4"
        >
          <h3 id="technologies-title" className="fs-2">
            Technologies
          </h3>
          <div id="technologies-content" className="row">
            <motion.div
              animate={
                !isShowingList.backend &&
                !isShowingList.others && {
                  height: isShowingList.frontend ? "auto" : "30%",
                }
              }
              id="frontend"
              className={`mb-2 mb-md-3 col-md-6 col-xl-4 ${
                isShowingList.frontend ? "border rounded p-0" : ""
              }`}
            >
              <div
                id="frontend-head"
                className={`d-flex justify-content-between align-items-center hover-pointer p-2 p-md-3 ${
                  !isShowingList.frontend ? "border rounded" : ""
                }`}
                onClick={toggleFrontend}
              >
                <h4 className="fs-3 m-0">
                  <i className="bi bi-window-fullscreen me-3"></i>
                  Front-End
                </h4>
                <motion.button
                  className="btn"
                  animate={{ rotate: isShowingList.frontend ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.i className="bi bi-chevron-down"></motion.i>
                </motion.button>
              </div>
              <AnimatePresence>
                {isShowingList.frontend && (
                  <motion.ul
                    id="frontend-body"
                    className="text-start d-flex ps-5 flex-column"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0, transition: { duration: 0.1 } }}
                    transition={{ duration: 0.4 }}
                  >
                    <li>
                      <FontAwesomeIcon icon={faHtml5} color="#e34c26" /> HTML
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCss3Alt} color="#264de4" /> CSS
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faJs}
                        style={{ color: "#f0db4f", background: "#323330" }}
                      />{" "}
                      JavaScript
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faReact} color="#61DBFB" /> React
                      JS
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faBootstrap} color="#5468ff" />{" "}
                      Bootstrap
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        id="tailwind-css"
                      >
                        <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
                      </svg>
                      Tailwind
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              animate={
                !isShowingList.frontend &&
                !isShowingList.others && {
                  height: isShowingList.backend ? "auto" : "30%",
                }
              }
              id="backend"
              className={`mb-2 mb-md-3 col-md-6 col-xl-4 ${
                isShowingList.backend ? "border rounded p-0" : ""
              }`}
            >
              <div
                id="backend-head"
                className={`d-flex justify-content-between align-items-center hover-pointer p-2 p-md-3 ${
                  !isShowingList.backend ? "border rounded" : ""
                }`}
                onClick={toggleBackend}
              >
                <h4 className="fs-3 m-0">
                  <i className="bi bi-hdd-stack me-3"></i>
                  Back-End
                </h4>
                <motion.button
                  className="btn"
                  animate={{ rotate: isShowingList.backend ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="bi bi-chevron-down"></i>
                </motion.button>
              </div>
              <AnimatePresence>
                {isShowingList.backend && (
                  <motion.ul
                    id="backend-body"
                    className="text-start d-flex ps-5 flex-column"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0, transition: { duration: 0.1 } }}
                    transition={{ duration: 0.4 }}
                  >
                    <li>
                      <FontAwesomeIcon
                        icon={faNode}
                        style={{ color: "#3C873A" }}
                      />{" "}
                      Node JS
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faNodeJs} /> Express JS
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faPhp}
                        style={{
                          color: "#232531",
                          background: "#8993be",
                          borderRadius: "50%",
                        }}
                      />{" "}
                      PHP
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faDatabase}
                        style={{ color: "#FFD700" }}
                      />{" "}
                      MySQL
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faServer}
                        style={{ color: "#00684A" }}
                      />{" "}
                      MongoDB
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faC}
                        style={{ color: "#1D24CA" }}
                      />{" "}
                      Basic C/C++
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faGit}
                        style={{ color: "#F1502F" }}
                      />{" "}
                      Git/Github
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              animate={
                !isShowingList.frontend &&
                !isShowingList.backend && {
                  height: isShowingList.others ? "auto" : "30%",
                }
              }
              id="others"
              className={`mb-2 mb-md-3 col-md-6 col-xl-4 ${
                isShowingList.others ? "border rounded p-0" : ""
              }`}
            >
              <div
                id="others-head"
                className={`d-flex justify-content-between align-items-center hover-pointer p-2 p-md-3 ${
                  !isShowingList.others ? "border rounded" : ""
                }`}
                onClick={toggleOthers}
              >
                <h4 className="fs-3 m-0">
                  <i className="bi bi-three-dots me-2"></i> Others
                </h4>
                <motion.button
                  className="btn"
                  animate={{ rotate: isShowingList.others ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="bi bi-chevron-down"></i>
                </motion.button>
              </div>
              <AnimatePresence>
                {isShowingList.others && (
                  <motion.ul
                    id="others-body"
                    className="text-start d-flex ps-5 flex-column"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0, transition: { duration: 0.1 } }}
                    transition={{ duration: 0.4 }}
                  >
                    <li>
                      Basic marketing, entrepreneurship and economics knowledge
                    </li>
                    <li>Microsoft Office Pack (Word, Excel and PowerPoint)</li>
                    <li>Google Drive, Docs, Sheets, etc</li>
                    <li>Fluent English and Portuguese</li>
                    <li>One year New Zealand exchange experience</li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        <Certificates
          isShowingList={isShowingList}
          setIsShowingList={setIsShowingList}
        />
      </div>
    </section>
  );
}
