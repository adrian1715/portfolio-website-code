import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Copa.module.css";
import { Helmet } from "react-helmet";
// import Head from "react-helmet";
import Pote from "../components/Pote";
import Group from "../components/Group";
import ProjectsNote from "../../../components/ProjectsNote";

export default function Copa() {
  async function imports() {
    try {
      await import("./app");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    imports();
    document.querySelector("#container").style.display = "none";
    document.querySelector("#favicon").remove();

    return () => {
      document.querySelector("#container").style.display = "block";
    };
  }, []);

  const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const potes = [
    [
      "Qatar",
      "Brazil",
      "Belgium",
      "France",
      "Argentina",
      "England",
      "Spain",
      "Portugal",
    ],
    [
      "Netherlands",
      "Germany",
      "Denmark",
      "Mexico",
      "United States",
      "Switzerland",
      "Uruguay",
      "Croatia",
    ],
    [
      "Senegal",
      "Iran",
      "Japan",
      "Serbia",
      "Poland",
      "South Korea",
      "Morrocco",
      "Tunisia",
    ],
    [
      "Canada",
      "Ecuador",
      "Saudi Arabia",
      "Ghana",
      "Cameroon",
      "New Zealand/Costa Rica",
      "Peru/Australia",
      "Wales/Scotland/Ukraine",
    ],
  ];

  return (
    <>
      <Helmet>
        <title>Sorteador da Copa - Adrian Lobato</title>
        <link
          id="world-cup-icon"
          rel="shortcut icon"
          href="https://upload.wikimedia.org/wikipedia/pt/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
          type="image/x-icon"
        />
      </Helmet>

      {ReactDOM.createPortal(
        <>
          <div id="simulador-da-copa" className={styles.body}>
            <h1 id="topo" className={styles.h1}>
              Simulador de Sorteio
            </h1>
            <div className="container">
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
                alt="copa do mundo 2022"
                className="img-fluid d-inline-block"
                style={{ maxHeight: "40px" }}
              />
              <h2 className="d-inline-block">Copa do Mundo Qatar 2022</h2>
              <h3>Potes</h3>
              <div
                id="potes"
                className={`row justify-content-center justify-content-md-between ${styles.potes}`}
              >
                {potes.map((teams, i) => (
                  <Pote key={i} teams={teams} pote={i + 1} copa="mundial" />
                ))}
              </div>

              <br />

              <div>
                <span className="me-2">Escolha uma opção: </span>
                <button
                  id="time-copa"
                  className="btn btn-outline-primary col-2 me-2"
                >
                  Sortear time
                </button>
                <button
                  id="tudo-copa"
                  className="btn btn-outline-success col-2 me-2"
                >
                  Sortear tudo
                </button>
                <button
                  id="limpar"
                  className="btn btn-outline-danger col-2 me-2"
                >
                  Limpar
                </button>

                <a
                  href="#grupos"
                  id="ver-grupos"
                  className={`btn btn-outline-light ms-auto me-4 col-sm-2 ${styles.verGrupos}`}
                  style={{ textDecoration: "none" }}
                >
                  <i className="bi bi-arrow-down me-1"></i>
                  Ver todos os grupos
                </a>
              </div>

              <br />
              <br />

              <h3>Grupos</h3>
              <div id="grupos">
                <div className="row">
                  {groups.map((group) => (
                    <Group key={group} group={group} copa="mundial" />
                  ))}
                </div>
              </div>

              <div className="row">
                <a
                  href="#topo"
                  id="volta-topo"
                  className="btn btn-outline-light text-start text-xl-center"
                >
                  Voltar ao topo
                  <i className="bi bi-arrow-up ms-1"></i>
                </a>
              </div>
            </div>
          </div>

          <ProjectsNote />
        </>,
        document.querySelector("body")
      )}
    </>
  );
}
