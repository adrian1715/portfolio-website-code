import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./LibSul.module.css";
import Head, { Helmet } from "react-helmet";
import Pote from "../components/Pote";
import Group from "../components/Group";
import libertadoresLogo from "../assets/libertadores/libertadores-logo.png";
import sulamericanaLogo from "../assets/sulamericana/sulamericana-logo.png";
import ProjectsNote from "../../../components/ProjectsNote";

export default function LibSul() {
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
  const potesLibertadores = [
    [
      "Palmeiras",
      "River Plate",
      "Boca Juniors",
      "Flamengo",
      "Nacional",
      "Peñarol",
      "Atlético Mineiro",
      "Athletico Paranaense",
    ],
    [
      "Cerro Porteño",
      "Libertad",
      "Independiente del Valle",
      "Universidad Católica",
      "Emelec",
      "Corinthians",
      "Colo-Colo",
      "Vélez Sarsfield",
    ],
    [
      "Sporting Cristal",
      "Deportivo Cali",
      "Red Bull Bragantino",
      "Deportivo Táchira",
      "Alianza Lima",
      "Tolima",
      "Colón",
      "Caracas",
    ],
    [
      "Always Ready",
      "Talleres",
      "Independiente Petrolero",
      "Fortaleza",
      "Olimpia",
      "Estudiantes",
      "The Strongest",
      "América Mineiro",
    ],
  ];
  const potesSulamericana = [
    [
      "Santos",
      "Independiente",
      "São Paulo",
      "Internacional",
      "Racing",
      "LDU",
      "Lanús",
      "Junior",
    ],
    [
      "Defensa y Justicia",
      "Jorge Wilstermann",
      "Independiente Medellín",
      "Melgar",
      "Montevideo Wanderers",
      "Oriente Petrolero",
      "Deportivo La Guaira",
      "Unión La Calera",
    ],
    [
      "River Plate",
      "Atlético Goianiense",
      "Ceará",
      "Banfield",
      "Metropolitanos",
      "Unión Santa Fé",
      "Ayacucho",
      "9 de Octubre",
    ],
    [
      "Antofagasta",
      "Guaireña",
      "Cuiabá",
      "General Caballero",
      "Fluminense",
      "Everton",
      "Universidad Católica",
      "Barcelona SC",
    ],
  ];

  return (
    <>
      <Helmet>
        <title>Simulador de sorteio - Adrian Lobato</title>
        <link
          id="libertadores-icon"
          rel="icon"
          href="/src/projects/simulador-de-sorteio/assets/libertadores/libertadores-logo.png"
        />
      </Helmet>

      {ReactDOM.createPortal(
        <>
          <div id="simulador-libertadores-sulamericana" className={styles.body}>
            <div id="libertadores" className={styles.libertadores}>
              <h1 className={styles.h1}>Simulador de Sorteio</h1>
              <div className="container">
                <img
                  src={libertadoresLogo}
                  alt="libertadores logo"
                  className="img-fluid d-inline-block"
                  style={{ maxHeight: "40px" }}
                />
                <h2 className="d-inline-block mt-4 mb-3">Libertadores</h2>
                <h3>Potes</h3>
                <div
                  id="potes"
                  className="row justify-content-center justify-content-md-between"
                >
                  {potesLibertadores.map((teams, i) => (
                    <Pote
                      key={i}
                      teams={teams}
                      pote={i + 1}
                      copa="libertadores"
                    />
                  ))}
                </div>
                <br />
                <div>
                  <span className="me-2">Escolha uma opção:</span>
                  <button
                    id="time-liberta"
                    className="btn btn-outline-primary col-2 me-2"
                  >
                    Sortear time
                  </button>
                  <button
                    id="tudo-liberta"
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
                </div>
                <br />
                <br />
                <h3>Grupos</h3>
                <div id="grupos">
                  <div className="row">
                    {groups.map((group) => (
                      <Group key={group} group={group} />
                    ))}
                  </div>
                </div>
                <br />
                <a
                  href="#sul-americana"
                  className="badge bg-primary p-2 border text-decoration-none"
                >
                  Sul-Americana
                </a>
              </div>
            </div>

            <div className={styles.transicao}></div>

            <div id="sul-americana" className={styles.sulamericana}>
              <h1 className={styles.h1}>Simulador de Sorteio</h1>
              <div className="container">
                <img
                  src={sulamericanaLogo}
                  alt="sul-americana logo"
                  className="img-fluid d-inline-block pb-2"
                  style={{ maxHeight: "40px" }}
                />
                <h2 id="sula-logo" className="d-inline-block my-3">
                  Sul-Americana
                </h2>
                <h3>Potes</h3>
                <div
                  id="potes"
                  className="row justify-content-center justify-content-md-between"
                >
                  {potesSulamericana.map((teams, i) => (
                    <Pote
                      key={i}
                      teams={teams}
                      pote={i + 1}
                      copa="sulamericana"
                    />
                  ))}
                </div>
                <br />
                <div>
                  <span className="me-2">Escolha uma opção:</span>
                  <button
                    id="time-sula"
                    className="btn btn-outline-primary col-2 me-2"
                  >
                    Sortear time
                  </button>
                  <button
                    id="tudo-sula"
                    className="btn btn-outline-success col-2 me-2"
                  >
                    Sortear tudo
                  </button>
                  <button
                    id="limpar-sula"
                    className="btn btn-outline-danger col-2 me-2"
                  >
                    Limpar
                  </button>
                </div>
                <br />
                <br />
                <h3>Grupos</h3>
                <div id="grupos">
                  <div className="row">
                    {groups.map((group) => (
                      <Group key={group} group={group} copa="sulamericana" />
                    ))}
                  </div>
                  <br />
                  <a
                    href="#libertadores"
                    className={`${styles.badge} badge bg-danger p-2 border text-decoration-none`}
                  >
                    Libertadores
                  </a>
                </div>
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
