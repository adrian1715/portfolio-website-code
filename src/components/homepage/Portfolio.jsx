import React from "react";
import styles from "../../pages/Homepage.module.css";
import { Link } from "react-router-dom";
import { toLinkFormatter } from "../../utils/toLinkFormatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const projects = [
    "Website Clones",
    "Letrico",
    "Simulators",
    "Pomodoro Timer",
  ];

  return (
    <section id="portfolio" className={styles.section}>
      <div id="portfolio-header" className={styles.sectionHeader}>
        <h2 id="portfolio-title" className="fs-1">
          Portfolio
        </h2>
        <p id="portfolio-subtitle">What I've been working on</p>
      </div>

      <div id="portfolioContent" className="carousel slide">
        <div className="carousel-inner">
          {projects.map((proj, i) => (
            <div
              key={i}
              className={`carousel-item row ${i === 0 ? "active" : ""}`}
            >
              <div className="col-9 mx-auto px-0 border rounded">
                <img
                  src={`/images/${toLinkFormatter(proj)}-project.png`}
                  className="border rounded col-12 mb-4"
                />
                <div>
                  <h3 className="fs-2 text-center">{proj}</h3>
                  <div className="row justify-content-center">
                    <a
                      href={`https://github.com/adrian1715/${
                        proj === "Letrico"
                          ? "letrico"
                          : proj === "Simulators"
                          ? "simulador-de-sorteio"
                          : proj === "Pomodoro Timer"
                          ? "pomodoro-timer"
                          : "recriando-sites"
                      }`}
                      target="_blank"
                      className="btn btn-outline-primary col-11 col-lg-5 mb-2 mb-lg-0 me-lg-2"
                    >
                      Github<i className="bi bi-github ms-2"></i>
                    </a>
                    <a
                      href={`/projects/${toLinkFormatter(proj)}`}
                      className="btn btn-outline-secondary col-11 col-lg-5 ms-lg-2"
                    >
                      Live Demo<i className="bi bi-wifi ms-2"></i>
                    </a>
                  </div>
                  <Link
                    to="/projects"
                    className="btn btn-success col-12 d-flex justify-content-center mt-4"
                    style={{ fontSize: "1.5rem", letterSpacing: "0.1rem" }}
                  >
                    See all projects
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#portfolioContent"
          data-bs-slide="prev"
        >
          {/* <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ color: "var(--bs-body-color)" }}
          ></span> */}
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: "var(--bs-body-color)" }}
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#portfolioContent"
          data-bs-slide="next"
        >
          {/* <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span> */}
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ color: "var(--bs-body-color)" }}
          />
          <span className="visually-hidden">Next</span>
        </button>

        {/* <div className="text-center d-flex justify-content-center pe-4">
          <Link
            to="/projects"
            className="btn btn-success col-9 d-flex justify-content-center"
            style={{ fontSize: "1.5rem", letterSpacing: "0.1rem" }}
          >
            See all projects
          </Link>
        </div> */}
      </div>
    </section>
  );
}
