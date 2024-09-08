import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "./Certificates";
import PDFViewer from "../components/PDFViewer";

export default function ShowCertificate() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const dirs = pathname.split("/");
  const item = dirs[2];

  const course = courses[item].filter((course) => course.id == id)[0];

  return (
    <>
      <h1 className="mb-4">{course.name}</h1>

      {course.onlineUrl && (
        <div className="mb-2">
          View Online:{" "}
          <Link to={course.onlineUrl} target="_blank">
            {course.onlineUrl}
          </Link>
        </div>
      )}

      <PDFViewer pdfUrl={`${pathname}.pdf`} />

      <div className="row mt-3">
        <Link className="col-auto" to="/certificates">
          All certificates
        </Link>
        <Link className="col-auto" to="..">
          {item[0].toUpperCase() + item.substring(1)} certificates
        </Link>
      </div>
    </>
  );
}
