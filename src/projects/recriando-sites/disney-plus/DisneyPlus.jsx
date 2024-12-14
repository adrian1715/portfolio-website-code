import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import styles from "./DisneyPlus.module.css";
import ProjectsNote from "../../../components/ProjectsNote";

export default function DisneyPlus() {
  useEffect(() => {
    document.getElementById("container").style.display = "none";
    document.getElementById("favicon").remove();

    return () => {
      document.getElementById("container").style.display = "block";
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>
          O melhor da Disney, Marvel, Pixar, Star Wars e National Geographic em
          um só lugar. | Disney+
        </title>
        <link
          id="disney-icon"
          rel="icon"
          type="image/png"
          href="https://static-assets.bamgrid.com/product/disneyplus/favicons/favicon-32x32.3699f19f7fdff1a556c0953c12fb883f.png"
        />
        <link rel="stylesheet" href="style.css" />
      </Helmet>

      {ReactDOM.createPortal(
        <>
          <div id="disney-plus" className={styles.body}>
            <header>
              <nav className={styles.nav}>
                <a id="main-logo" href="#" className={styles.a}>
                  <img
                    src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
                    alt="Disney Plus"
                  />
                </a>
                <a
                  id="assine-agora"
                  className={`${styles.navLink} ${styles.assineAgora} ${styles.a}`}
                  href="#"
                >
                  <span>assine agora</span>
                </a>
                <a
                  id="login"
                  className={`${styles.navLink} ${styles.login} ${styles.a}`}
                  href="#"
                >
                  <span>entrar</span>
                </a>
              </nav>
            </header>
            <main>
              <section
                id="section-1"
                className={`${styles.section} ${styles.section1}`}
              >
                <div id="container-1">
                  <div className={styles.precosContainer}>
                    <h3 className={styles.h3}>
                      Com o Combo+, você pode aproveitar o Disney+ e o Star+ por
                      um preço único.
                    </h3>
                    <img
                      className={styles.starPlus}
                      src="/src/projects/recriando-sites/assets/2.png"
                      alt="Combo+"
                    />
                    <div className={styles.assinarInfos}>
                      <a
                        id="assinar-link-1"
                        className={`${styles.a} ${styles.assinarLink} ${styles.jump}`}
                        href="#"
                      >
                        <span>ASSINE POR R$ 45,90*</span>
                      </a>
                      <p
                        className={`${styles.text1} ${styles.jump} ${styles.p}`}
                      >
                        *O preço pode variar caso a assinatura seja feita
                        através de outras plataformas
                      </p>
                      <a
                        id="assinar-link-2"
                        className={`${styles.a} ${styles.assinarLink2}`}
                        href="#"
                      >
                        <span>Assinar somente o Disney+</span>
                      </a>
                      <p
                        className={`${styles.text2} ${styles.jump} ${styles.p}`}
                      >
                        R$ 27,90/mês* ou R$ 279,90/ano à vista*
                      </p>
                    </div>
                  </div>
                </div>
                <a className={`${styles.a} ${styles.seta}`} href="#section-2">
                  <i className="bi bi-arrow-down"></i>
                </a>
              </section>

              <section
                id="section-2"
                className={`${styles.section} ${styles.sec} ${styles.section2}`}
              >
                <img
                  src="/src/projects/recriando-sites/assets/3.png"
                  alt=""
                  className={styles.secImg}
                />
                <div className={styles.secText}>
                  <h3 className={styles.h3}>Assista do seu jeito</h3>
                  <p className={styles.p}>
                    Aproveite a tela grande da TV ou assista no tablet, laptop,
                    celular e outros aparelhos. Nossa seleção de títulos em 4K
                    não para de crescer. Além disso, para a felicidade de todos,
                    é possível assistir em até 4 telas ao mesmo tempo.
                  </p>
                </div>
              </section>

              <section
                id="section-3"
                className={`${styles.section} ${styles.sec} ${styles.section3}`}
              >
                <div className={styles.secText}>
                  <p className={styles.p}>
                    Só o Combo+ oferece Disney+ e Star+ juntos para você ter
                    acesso ilimitado a filmes, séries de sucesso e esportes ao
                    vivo com a ESPN, para ver onde e como quiser.
                  </p>
                  <div className={styles.assinarInfos}>
                    <a
                      id="assinar-link-3"
                      className={`${styles.a} ${styles.assinarLink} ${styles.jump} ${styles.assinarLink3}`}
                      href="#"
                    >
                      <span>ASSINAR O COMBO+</span>
                    </a>
                  </div>
                </div>
                <img
                  src="/src/projects/recriando-sites/assets/4.jpg"
                  alt=""
                  className={styles.secImg}
                />
              </section>

              <section
                id="section-4"
                className={`${styles.section} ${styles.sec} ${styles.section4}`}
              >
                <img src="/src/projects/recriando-sites/assets/5.png" alt="" />
                <div className={styles.secText}>
                  <h3 className={styles.h3}>Baixe filmes e séries</h3>
                  <p className={styles.p}>
                    Baixe e assista quando e onde quiser. Assim, seus favoritos
                    estão sempre com você, até mesmo sem internet.
                  </p>
                </div>
              </section>

              <section
                id="section-5"
                className={`${styles.section} ${styles.section5}`}
              >
                <h2 className={styles.h2}>
                  Disponível nos seus dispositivos favoritos
                </h2>
                <div id="container-2">
                  <div id="first-part" className={styles.divisa}>
                    <div id="div-1">
                      <img
                        src="/src/projects/recriando-sites/assets/7.png"
                        alt=""
                      />
                      <h3 className={styles.h3}>Computador</h3>
                      <ul>
                        <li>Chrome OS</li>
                        <li>MacOS</li>
                        <li>PC Windows</li>
                      </ul>
                    </div>
                    <div id="div-2">
                      <img
                        src="/src/projects/recriando-sites/assets/6.png"
                        alt=""
                      />
                      <h3 className={styles.h3}>TV</h3>
                      <ul>
                        <li>Amazon Fire Tv</li>
                        <li>Android TV</li>
                        <li>Apple TV</li>
                        <li>Chromecast</li>
                        <li>TVs LG</li>
                        <li>Roku</li>
                        <li>Samsung</li>
                      </ul>
                    </div>
                  </div>
                  <div id="second-part" className={styles.divisa}>
                    <div id="div-3">
                      <img
                        src="/src/projects/recriando-sites/assets/9.png"
                        alt=""
                      />
                      <h3 className={styles.h3}>Videogames</h3>
                      <ul>
                        <li>PS4</li>
                        <li>PS5</li>
                        <li>Xbox One</li>
                        <li>Xbox Series X</li>
                        <li>Xbox Series S</li>
                      </ul>
                    </div>
                    <div id="div-4">
                      <img
                        src="/src/projects/recriando-sites/assets/8.png"
                        alt=""
                      />
                      <h3 className={styles.h3}>Celulares e tablets</h3>
                      <ul>
                        <li>Tablets Amazon Fire</li>
                        <li>Celulares e Tablets Android</li>
                        <li>iPhone e iPad</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <footer className={styles.footer}>
              <img
                src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
                alt="Disney Plus"
              />
              <ul>
                <li>
                  <a href="#" className={styles.a}>
                    Termos e Condições de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.a}>
                    Política de privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.a}>
                    Proteção de Dados no Brasil
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.a}>
                    Anúncios personalizados
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.a}>
                    Dispositivos compatíveis
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.a}>
                    Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.a}>
                    Sobre o Disney+
                  </a>
                </li>
              </ul>
              <p className={styles.p}>
                ® 2022 Disney, Disney+ e The Walt Disney Company. Todos os
                direitos reservados. Serviço de assinatura paga. Conteúdo
                sujeito a disponibilidade.
                <br />
                <br />
                <br />
                Disney+ é um serviço pago, baseado em assinatura e sujeito a
                termos e condições. O serviço Disney+ é comercializado por The
                Walt Disney Company (Brasil) Ltda., World Trade Center, Av. Das
                Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo/SP –
                CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20
              </p>
            </footer>
          </div>

          <ProjectsNote />
        </>,
        document.querySelector("body")
      )}
    </>
  );
}
