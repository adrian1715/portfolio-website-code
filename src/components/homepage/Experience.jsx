import React, { useState } from "react";
import styles from "../../pages/Homepage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faSchool,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Experience() {
  const [xpType, setXpType] = useState("education");

  return (
    <section id="experience" className={styles.section}>
      <div id="experience-header" className={styles.sectionHeader}>
        <h2 id="experience-title" className="fs-1">
          Experience
        </h2>
        <p id="experience-subtitle">My academic and professional journey</p>
      </div>
      <div id="experience-content" className="w-100">
        <div id="experience-head" className="row justify-content-center mb-4">
          <a
            className={`fs-2 col-auto hover-pointer text-decoration-none px-sm-4 ${
              xpType === "education" ? "nav-link active" : "text-secondary"
            } ${styles.xpHeadItem}`}
            onClick={() => setXpType("education")}
          >
            <i className="bi bi-mortarboard-fill me-2"></i>
            Education
          </a>
          <a
            className={`fs-2 col-auto hover-pointer text-decoration-none px-sm-4 ${
              xpType === "work" ? "nav-link active" : "text-secondary"
            } ${styles.xpHeadItem}`}
            onClick={() => setXpType("work")}
          >
            <i className="bi bi-briefcase-fill me-2"></i>
            Work
          </a>
        </div>
        <div
          id="experience-body"
          className="d-flex flex-column align-items-center"
        >
          {xpType === "education" && (
            <>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>Bachelor's in Business Computing</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    Technological University Dublin
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>IT Management - Technological Course Level 6</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    Anhembi Morumbi
                  </span>
                  <Link
                    to={`/certificates/anhembi`}
                    className="col-12 col-md-auto text-decoration-none link-light link-opacity-75-hover"
                  >
                    <FontAwesomeIcon icon={faCertificate} /> See Certificate
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>Entrepreneurship and Economics Studies</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    Albany Senior High School
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>IT Technical Course and High School</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    CTI - Colégio Técnico Industrial "Prof. Isaac Portal Roldán"
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>Middle and High School</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    Colégio São José and Anglo Bauru
                  </span>
                </div>
              </div>
            </>
          )}
          {xpType === "work" && (
            <>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>Web Developer and Customer Support</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    Arca Solutions
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>IT Assistant</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    inFlux Bauru
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>Sales Consultant</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    inFlux Bauru
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>Active and Receptive Attendant</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    Paschoalotto - Santander bank sector
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
