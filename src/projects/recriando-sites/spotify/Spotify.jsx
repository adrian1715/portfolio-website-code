import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import styles from "./Spotify.module.css";
import ProjectsNote from "../../../components/ProjectsNote";

export default function Spotify() {
  useEffect(() => {
    document.getElementById("container").style.display = "none";
    document.getElementById("favicon").remove();

    return () => {
      document.getElementById("container").style.display = "block";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <Helmet>
        <title>Escutar muda tudo - Spotify</title>
        <link
          id="spotify-icon"
          rel="icon"
          href="https://www.scdn.co/i/_global/favicon.png"
        />
        <link rel="stylesheet" href="style.css" />
      </Helmet>

      <div id="spotify">
        <header className={styles.header} style={{ background: "black" }}>
          <nav
            className={`${styles.navbar} ${styles.nav} navbar navbar-expand-lg navbar-dark container`}
          >
            <a href="#" className={`${styles.a} navbar-brand`}>
              <img
                className={styles.navSpotifyLogo}
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                alt="Spotify logo"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navLinks"
              aria-controls="navLinks"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navLinks" className="collapse navbar-collapse">
              <ul className="navbar-nav text-light ms-md-auto">
                <li className="nav-item active">
                  <a
                    href="#"
                    className={`nav-link ${styles.navLink} ${styles.a}`}
                  >
                    Premium
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className={`nav-link ${styles.navLink} ${styles.a}`}
                  >
                    Suporte
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className={`nav-link ${styles.navLink} ${styles.a}`}
                  >
                    Baixar
                  </a>
                </li>

                <li
                  className={`nav-item ${styles.barra}`}
                  style={{ margin: "auto 17px" }}
                >
                  |
                </li>

                <li className="nav-item">
                  <a
                    href="#"
                    className={`nav-link ${styles.navLink} ${styles.a}`}
                  >
                    Inscrever-se
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className={`nav-link ${styles.navLink} ${styles.a}`}
                  >
                    Entrar
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main className={styles.main}>
          <h1 className="container">Escutar muda tudo</h1>
          <p>
            Milhões de músicas e podcasts para explorar. E nem precisa de cartão
            de crédito.
          </p>
          <br />
          <a href="#" className={`${styles.a} download-btn`}>
            <button
              className={`btn btn-success ${styles.btnSuccess} rounded-pill`}
            >
              Baixe o Spotify Free
            </button>
          </a>
        </main>

        <footer className={styles.footer}>
          <div className="container">
            <div className="row justify-content-md-between">
              <div className="spotify-logo d-block col-3 col-lg-2">
                <img
                  className="img-fluid"
                  src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                  alt=""
                />
              </div>
              <div className="col-md col-lg-2">
                <ul>
                  <li className={styles.listTitle}>Empresa</li>

                  <li className={styles.listItem}>
                    <a href="#" className={styles.a}>
                      Sobre
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="#" className={styles.a}>
                      Empregos
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="#" className={styles.a}>
                      For the record
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md col-lg-2">
                <ul>
                  <li className={styles.listTitle}>Comunidades</li>

                  <li className={styles.listItem}>
                    <a href="#" className={styles.a}>
                      Para Artistas
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="#" className={styles.a}>
                      Desenvolvedores
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="#" className={styles.a}>
                      Publicidade
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="#" className={styles.a}>
                      Investidores
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="#" className={styles.a}>
                      Fornecedores
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md col-lg-2">
                <ul>
                  <li className={styles.listTitle}>Links Úteis</li>

                  <li className={styles.listItem}>
                    <a href="#" className={styles.a}>
                      Suporte
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="#" className={styles.a}>
                      Player da Web
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="#" className={styles.a}>
                      Aplicativo móvel grátis
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className={`col-lg-4 d-lg-flex justify-content-end ${styles.socials} pt-3`}
              >
                <div>
                  <button className="btn btn-dark rounded-circle">
                    <a href="#" className={styles.a}>
                      <img
                        src="/src/projects/recriando-sites/assets/insta.png"
                        alt="Instagram logo"
                      />
                    </a>
                  </button>
                  <button className="btn btn-dark rounded-circle mx-1">
                    <a href="#" className={styles.a}>
                      <img
                        src="/src/projects/recriando-sites/assets/twitter png.png"
                        alt="Twitter logo"
                      />
                    </a>
                  </button>
                  <button className="btn btn-dark rounded-circle">
                    <a href="#" className={styles.a}>
                      <img
                        src="/src/projects/recriando-sites/assets/facebook png.png"
                        alt="Facebook logo"
                      />
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <a href="#" className={`${styles.a} d-flex justify-content-end`}>
                <span className="brasil">
                  <i className="bi bi-globe-americas"></i>
                  Brasil
                </span>
              </a>
            </div>
            <div className={styles.bottomRow}>
              <ul className={styles.bottomLinks}>
                <li>
                  <a href="#" className={`${styles.a} ${styles.listItem2}`}>
                    Legal
                  </a>
                </li>
                <li>
                  <a href="#" className={`${styles.a} ${styles.listItem2}`}>
                    Centro de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className={`${styles.a} ${styles.listItem2}`}>
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className={`${styles.a} ${styles.listItem2}`}>
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className={`${styles.a} ${styles.listItem2}`}>
                    Sobre anúncios
                  </a>
                </li>
              </ul>

              <span
                className={`${styles.spotifyAb} justify-content-end ms-auto`}
              >
                © 2022 Spotify AB
              </span>
            </div>
          </div>
        </footer>
      </div>

      <ProjectsNote />
    </>,
    document.querySelector("body")
  );
}
