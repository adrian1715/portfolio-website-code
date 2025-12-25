import React from "react";
import styles from "../../pages/Homepage.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div id="about-header" className={styles.sectionHeader}>
        <h2 id="about-title" className="fs-1">
          About me
        </h2>
        <p id="about-subtitle">Who I am</p>
      </div>
      <div id="about-content" className="row justify-content-center">
        <div
          id="about-image"
          className="col-lg-5 col-xl-4 mb-4 mb-lg-0 d-flex justify-content-center align-items-center"
        >
          <img src="/images/me-2.jpg" className="rounded img-fluid" />
        </div>
        <div className="col-lg-7 col-xl-6 px-md-4 px-lg-3 d-flex flex-column justify-content-center">
          <p>
            Full-Stack Developer with professional experience in web development
            and IT support. Graduated in IT Management and pursuing Business
            Computing at the Technological University of Dublin. Actively
            building modern web applications using technologies like JavaScript,
            React, Node.js, PHP, and SQL. EU citizen with full work rights in
            Ireland, available for immediate start. Passionate about solving
            real-world problems, creating efficient and scalable solutions that
            meet deadlines and business needs.
          </p>
          <p className="m-0">
            I am a proactive and dedicated person, easy to get along with on a
            daily basis, and always willing to help and learn with others. As I
            have always been interested in technology, programming attracted me
            for the first time when I was 15, mainly because of the enormous
            creative freedom it provides. Since then, I have dedicated myself to
            studying new technologies and developing different ideas and
            projects, from games to apps and websites.
          </p>
        </div>
      </div>
    </section>
  );
}
