import React from "react";
import { links } from "../App";
import { Link, useLocation, Outlet } from "react-router-dom";
import { formatLinkPath } from "../utils/formatLinkPath";
import { toLinkFormatter } from "../utils/toLinkFormatter";
import { isCurrentPage } from "../utils/isCurrentPage";
import { Helmet } from "react-helmet";

export default function ShowProjects() {
  const pathname = useLocation().pathname.endsWith("/")
    ? useLocation().pathname.substring(0, useLocation().pathname.length - 1)
    : useLocation().pathname;
  // const { pathname } = useLocation();

  const matchingRoutes = links
    .filter((link) => link.path === "/projects")[0]
    .children.map((project) => project.path);
  const lastDirectory = pathname.split("/")[pathname.split("/").length - 1];

  const isRouteAllowed = matchingRoutes.some((route) =>
    route.includes(lastDirectory)
  );

  const directories = pathname.split("/");
  // console.log(directories);

  const projects = isRouteAllowed
    ? links
        .filter((link) => link.path === "/projects")[0]
        .children.filter((link) => lastDirectory === link.path)[0].children
    : links.filter((link) => link.path === "/projects")[0].children;

  const projectUrls = isRouteAllowed
    ? links.filter((link) => link.path === "/projects")[0].children
    : projects
        .filter((project) => project.path === directories[2])[0]
        .children.map((project) => project.path);

  if (isCurrentPage(pathname, projectUrls)) return <Outlet />;

  return (
    <>
      <Helmet>
        <title>Projects - Adrian Lobato</title>
      </Helmet>

      <h1>Select a project</h1>
      <ul>
        {projects.length > 0 ? (
          projects.map((proj, i) => (
            <li key={i}>
              {/* external project pages */}
              {proj.path === "bauru-empregos" ? (
                <a
                  href="https://github.com/adrian1715/bauru-empregos-clone"
                  target="_blank"
                >
                  {/* {formatLinkPath(`/${proj.path}`)} */}
                  Bauru Empregos Clone (PHP - Github Repository)
                </a>
              ) : proj.path === "login-panel" ? (
                <a
                  href="https://github.com/adrian1715/simple-projects/tree/main/login-panel"
                  target="_blank"
                >
                  Simple Login Panel (PHP - Github repository)
                </a>
              ) : (
                // project live demo page
                <a href={`${pathname}/${proj.path}`} className="link">
                  {formatLinkPath(`/${proj.path}`)}
                </a>
              )}
            </li>
          ))
        ) : (
          <li>No projects available.</li>
        )}
      </ul>
      <Link to="/projects">All Projects</Link>
    </>
  );
}
