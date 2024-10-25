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
          <img src="/images/me-2.png" className="rounded img-fluid" />
        </div>
        <div className="col-lg-6 px-md-4 px-lg-3 d-flex flex-column justify-content-center">
          <p>
            I am a 21-year-old Italian-Brazilian web developer, passionate about
            creativity and always willing and engaged in working on new
            projects. As I have always been interested in technology,
            programming attracted me for the first time when I was 15, mainly
            because of the enormous creative freedom it provides. Since then, I
            have dedicated myself to studying new technologies and developing
            different ideas and projects, from games to even websites and
            applications.
          </p>
          <p className="m-0">
            I am a proactive and dedicated person, who is easy to get along with
            on a daily basis, and is always willing to help and learn with
            others. I aim to develop my skills in order to contribute as much as
            I can to both the contractor and my own personal and professional
            growth.
          </p>
        </div>
      </div>
    </section>
  );
}
