import React, { Fragment } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { links } from "../App";
import { toLinkFormatter } from "../utils/toLinkFormatter";
import { isNumeric } from "../utils/isNumeric";
import { lowerCaseFirstChar } from "../utils/lowerCaseFirstChar";
import { Helmet } from "react-helmet";

export const courses = {
  alura: [
    {
      id: 14,
      name: "PHP: conceitos, lidando com dados, loops e mais",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/4ced5831-017f-4baf-8c4c-012f1685616e?lang=pt_BR",
    },
    {
      id: 2,
      name: "Avançando com PHP: Arrays, Strings, Função e Web",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/c02007e3-f10c-453b-8a40-faf016977355?lang=pt_BR",
    },
    {
      id: 12,
      name: "Orientação a Objetos com PHP: Classes, métodos e atributos",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/d8723307-9644-4996-af64-773c9e0b0ca2?lang=pt_BR",
    },
    {
      id: 1,
      name: "Avançando com Orientação a Objetos com PHP: Herança, Polimorfismo e Interfaces",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/b1ff5d68-b0d0-40c6-97a9-e9108df3ae4c?lang=pt_BR",
    },
    {
      id: 20,
      name: "PHP: manipulando coleções com Arrays",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/f37c6a97-82f8-4f8e-8bdb-a8cc17a16424?lang=pt_BR",
    },
    {
      id: 17,
      name: "PHP Exceptions: tratamento de erros",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/769fe5b4-9cc0-41d6-aac6-0bb6da069004?lang=pt_BR",
    },
    {
      id: 13,
      name: "PHP Composer: Dependências, Autoload e Publicação",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/2fe85eac-1c53-407a-9000-d08e955039fe?lang=pt_BR",
    },
    {
      id: 16,
      name: "PHP e PDO: trabalhando com banco de dados",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/15837bcd-8dbe-4fba-a20f-f47fbf7aad83?lang=pt_BR",
    },
    {
      id: 21,
      name: "SQL com MySQL: manipule e consulte dados",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/436a3a28-3742-4c9f-88bc-51c3a0f10437?lang=pt_BR",
    },
    {
      id: 4,
      name: "DoctrineORM: acesse o banco com Mapeamento Objeto-Relacional",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/9fbd7a7d-1074-4009-bba2-cd4fbd1d3d4d?lang=pt_BR",
    },
    {
      id: 3,
      name: "Consultas SQL: avançando no SQL com MySQL",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/ef8cbc2d-ff55-4914-ac4a-1d5602d9b05e?lang=pt_BR",
    },
    {
      id: 5,
      name: "Expressões Regulares: capturando textos de forma mágica",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/36d97456-3f13-4b39-bbd0-901c2a11e8eb?lang=pt_BR",
    },
    {
      id: 8,
      name: "HTTP: Entendendo a web por baixo dos panos",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/434b95cb-b7e1-457d-984d-3648aea6adea?lang=pt_BR",
    },
    {
      id: 15,
      name: "PHP e MySQL: Criando uma webapp",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/504c3ef3-78e2-421d-aac5-94f83f035e32?lang=pt_BR",
    },
    {
      id: 19,
      name: "PHP Strings: Operações e expressões regulares",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/c4e3f5c7-e837-41a1-9c01-b43fecd6dc59?lang=pt_BR",
    },
    {
      id: 18,
      name: "PHP I/O: trabalhando com arquivos e streams",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/ab661d4f-7d5a-4786-835f-8ee610b9070b?lang=pt_BR",
    },
    {
      id: 10,
      name: "jQuery: domine a biblioteca mais popular do mercado parte 1",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/597e3754-9738-4ec8-9c1a-64cfffe21455?lang=pt_BR",
    },
    {
      id: 9,
      name: "jQuery: avance na biblioteca mais popular do mercado parte 2",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/02d05016-8cc6-4645-893c-ab5d35de2dc6?lang=pt_BR",
    },
    {
      id: 7,
      name: "Hábitos: da produtividade às metas pessoas",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/ebd54d66-e5ed-4b19-8a14-3c6a427b0e1b?lang=pt_BR",
    },
    {
      id: 11,
      name: "Linux Onboarding: usando a CLI de uma forma rápida e prática",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/49f5f8ac-86e5-4bbf-bab1-ebe4fbed8a06?lang=pt_BR",
    },
    {
      id: 6,
      name: "Foco: trazendo mais resultados para o dia a dia",
      certificated: true,
      onlineUrl:
        "https://cursos.alura.com.br/certificate/20e91e50-dbec-4358-bab0-1c4319455f79?lang=pt_BR",
    },
  ].sort((a, b) => a.name.localeCompare(b.name)),
  youtube: [
    { name: "HTML e CSS para iniciantes", author: "RB Tech" },
    { name: "Banco de Dados MySQL", author: "Curso em Vídeo" },
  ].sort((a, b) => a.name.localeCompare(b.name)),
  udemy: [
    { id: 1, name: "Introdução ao Inbound Marketing", author: "RD University" },
    {
      id: 2,
      name: "Aprenda Linguagem C - Fundamentos para a Lógica de Programação",
      author: "One Day code",
    },
    {
      id: 3,
      name: "HTML5: Primeiros passos na carreira de Desenvolvedor",
      author: "Marnei Cardoso",
    },
    {
      id: 4,
      name: "Introdução à Linguagem HTML",
      author: "Diego Mariano",
      certificated: true,
    },
    {
      id: 5,
      name: "Web Design for Web Developers",
      author: "Jonas Schmedtmann",
    },
    {
      id: 6,
      name: "Introdução ao Inbound Marketing",
      author: "Daniel Tapias Morales, serfrontend Cursos",
    },
    {
      id: 7,
      name: "Web Development Bootcamp",
      author: "Colt Steele",
      certificated: true,
    },
    {
      id: 8,
      name: "React The Complete Guide",
      author: "Maximilan Schwarzmüller",
    },
  ].sort((a, b) => a.name.localeCompare(b.name)),
  symfonyCasts: [
    {
      id: 4,
      name: "Symfony 2: Level 1",
      certificated: true,
      onlineUrl: "https://symfonycasts.com/certificates/3C17951F7C38",
    },
    {
      id: 5,
      name: "Symfony 2: Level 2",
      certificated: true,
      onlineUrl: "https://symfonycasts.com/certificates/A59738E11C39",
    },
    {
      id: 6,
      name: "Symfony 2: Level 3",
      certificated: true,
      onlineUrl: "https://symfonycasts.com/certificates/E34A1E9FAC41",
    },
    {
      id: 7,
      name: "Symfony 2: Level 4",
      certificated: true,
      onlineUrl: "https://symfonycasts.com/certificates/68E87A9A7C42",
    },
    {
      id: 3,
      name: "Symfony: Best Practices",
      certificated: true,
      onlineUrl: "https://symfonycasts.com/certificates/D4E493BF9C50",
    },
    {
      id: 1,
      name: "Fixtures with Alice",
      certificated: true,
      onlineOnline: "https://symfonycasts.com/certificates/19EF6AC1CC52",
    },
    {
      id: 2,
      name: "PhpStorm",
      certificated: true,
      onlineUrl: "https://symfonycasts.com/certificates/65426CFEDC66",
    },
  ].sort((a, b) => a.name.localeCompare(b.name)),
};

export default function Certificates() {
  const { items } = links.filter((link) => link.path === "/certificates")[0];

  const { pathname } = useLocation();
  const lastDirectory = pathname.split("/")[pathname.split("/").length - 1];

  const hasCertificatedCourses = (arr) =>
    arr.some((item) => typeof item.certificated !== "undefined");

  return (
    <>
      <Helmet>
        <title>Certificates - Adrian Lobato</title>
      </Helmet>

      {!isNumeric(lastDirectory) && ( // to avoid showing it for ShowCertificate (Outlet children) routes
        <>
          <h1>Certificates</h1>
          {items.map(
            (item) =>
              (lastDirectory === lowerCaseFirstChar(item) ||
                lastDirectory === "certificates") &&
              hasCertificatedCourses(courses[lowerCaseFirstChar(item)]) && (
                <Fragment key={item}>
                  <h2>{item}</h2>
                  <ul>
                    {courses[lowerCaseFirstChar(item)].map(
                      (course, i) =>
                        course.certificated && (
                          <li key={i}>
                            <Link
                              to={`/certificates/${lowerCaseFirstChar(item)}/${
                                course.id
                              }`}
                            >
                              {`${course.name}${
                                course.author ? ` - ${course.author}` : ""
                              }`}
                            </Link>
                          </li>
                        )
                    )}
                  </ul>
                  {lastDirectory === lowerCaseFirstChar(item) && (
                    <Link to="/certificates">All certificates</Link>
                  )}
                </Fragment>
              )
          )}
        </>
      )}

      {isNumeric(lastDirectory) && <Outlet />}
    </>
  );
}
