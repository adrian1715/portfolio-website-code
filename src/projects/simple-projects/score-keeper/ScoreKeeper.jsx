import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import styles from "./ScoreKeeper.module.css";
import ProjectsNote from "../../../components/ProjectsNote";

export default function ScoreKeeper() {
  async function imports() {
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
        <title>Score Keeper - Adrian Lobato</title>
      </Helmet>

      {ReactDOM.createPortal(
        <>
          <div id="score-keeper" className={`container ${styles.container}`}>
            <img
              src="https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3784&q=80"
              alt="ping pong"
              className={styles.img}
            />

            <div className={`${styles.row} row border d-flex`}>
              <p
                className="align-items-center"
                style={{ margin: 0, fontWeight: "bold" }}
              >
                Ping Pong Score Keeper
              </p>
            </div>

            <div className={`${styles.row} row border mt-1`}>
              <div className={`col-12 ${styles.col12}`}>
                <h1 id="score">
                  <span id="points-1">0</span> to <span id="points-2">0</span>
                </h1>
                <p className="">Use the buttons below to keep score</p>
                <h2 className="d-flex align-items-center">
                  Playing to
                  <select id="#max-score" className={`${styles.select} ms-2`}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                  </select>
                </h2>
              </div>
            </div>

            <div id="buttons" className={styles.buttons}>
              <button
                id="button-1"
                className={`${styles.btn} btn btn-primary col-4 border-end`}
              >
                +1 Player One
              </button>
              <button
                id="button-2"
                className={`${styles.btn} btn btn-success col-4 border-start border-end`}
              >
                +1 Player Two
              </button>
              <button
                id="button-3"
                className={`${styles.btn} btn btn-danger col-4 border-start`}
              >
                Reset
              </button>
            </div>
          </div>

          <ProjectsNote />
        </>,
        document.querySelector("body")
      )}
    </>
  );
}
