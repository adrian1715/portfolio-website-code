import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Timer.module.css";
import ProjectsNote from "../../components/ProjectsNote";
import { Helmet } from "react-helmet";

export default function Timer() {
  async function imports() {
    console.log("importing app");
    try {
      await import("./app");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    imports();
  }, []);

  return (
    <>
      <Helmet>
        <title>Pomodoro Timer - Adrian Lobato</title>
      </Helmet>

      <div id="pomodoro-timer">
        <h1 className="display-1">
          Pomodoro Timer
          <i className="bi bi-clock ms-3"></i>
        </h1>
        <br />
        <div id="buttons" className="d-flex justify-content-between">
          <button
            id="study-timer-btn"
            className="btn btn-primary border timer-btn"
          >
            Start Studying
          </button>
          <div className="mid-btns">
            <button
              id="pause-btn"
              className="btn btn-dark border me-1"
              disabled
            >
              Pause
            </button>
            <button
              id="restart-btn"
              className="btn btn-secondary border ms-1"
              disabled
            >
              Restart Timer
            </button>
          </div>
          <button id="break-btn" className="btn btn-success border timer-btn">
            Take a Break
          </button>
        </div>
        <div id="timer" className={styles.timer}>
          00:00
        </div>
        <h2>
          Pomodoros: <span id="pomodoros">0</span>
        </h2>
      </div>

      <ProjectsNote />

      {ReactDOM.createPortal(
        <>
          <audio id="hurt-sound" src="assets/hurt.mp3" preload="auto"></audio>
          <audio
            id="tetra-sound"
            src="assets/acabouuu.m4a"
            preload="auto"
          ></audio>
        </>,
        document.querySelector("body")
      )}
    </>
  );
}
