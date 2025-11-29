import React, { Fragment } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { links } from "../App";
import { toLinkFormatter } from "../utils/toLinkFormatter";
import { isNumeric } from "../utils/isNumeric";
import { lowerCaseFirstChar } from "../utils/lowerCaseFirstChar";
import { Helmet } from "react-helmet";
import coursesData from "../../public/data/courses.json";

export const courses = coursesData;

export default function Certificates() {
  const { items } = links.filter((link) => link.path === "/certificates")[0];

  const { pathname } = useLocation();
  const lastDirectory = pathname.split("/")[pathname.split("/").length - 1];

  const hasCertifiedCourses = (arr) =>
    arr.some((item) => typeof item.certified !== "undefined");

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
              hasCertifiedCourses(courses[lowerCaseFirstChar(item)]) && (
                <Fragment key={item}>
                  <h2>{item}</h2>
                  <ul>
                    {courses[lowerCaseFirstChar(item)].map(
                      (course, i) =>
                        course.certified && (
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
