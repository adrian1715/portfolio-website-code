import React, { useState } from "react";
import { links } from "../App";
import { toLinkFormatter } from "../utils/toLinkFormatter";
import { Link } from "react-router-dom";
import { isCurrentPage } from "../utils/isCurrentPage";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ShowProjects from "./ShowProjects";
import { Helmet } from "react-helmet";

export const projects = [
  ["Simulators", "Libertadores/Sul-Americana 2022", "Copa do Mundo 2022"],
  ["Letrico"],
  ["Busca CEP"],
  ["Pomodoro Timer"],
  ["Simple Projects", "Score Keeper", "ToDo List"],
  ["Website Clones", "Disney Plus", "Spotify"],
].sort();

export default function Projects() {
  const { pathname } = useLocation();

  const getObjectNumericKeys = (obj) =>
    Object.fromEntries(Object.entries(obj).filter(([key]) => !isNaN(key)));

  const projectUrls = links
    .filter((link) => link.path === "/projects")[0]
    .children.map((link) => {
      if (!link.path)
        return Object.values(getObjectNumericKeys(link)).map((li) => li.path);
      return link.path;
    });

  if (isCurrentPage(pathname, projectUrls)) return <Outlet />;

  return (
    <>
      <Helmet>
        <title>Projects - Adrian Lobato</title>
      </Helmet>

      <h1>Projects</h1>
      <ul>
        {projects.length > 0 ? (
          projects.map((project, i) => (
            // vanilla javascript projects - <Link> doesn't load them correctly
            <li key={i}>
              {project.length === 1 ? (
                <a
                  href={`/projects/${toLinkFormatter(project[0])}`}
                  className="link"
                >
                  {project[0]}
                </a>
              ) : (
                <Link
                  to={`/projects/${toLinkFormatter(project[0])}`}
                  className="link"
                >
                  {project[0]}
                </Link>
              )}
            </li>
          ))
        ) : (
          <li>No items were found.</li>
        )}
      </ul>
    </>
  );
}
