import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "./Certificates";
import PDFViewer from "../components/PDFViewer";
import DownloadButton from "../components/DownloadButton";

export default function ShowCertificate() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const dirs = pathname.split("/");
  const item = dirs[2];

  const course = courses[item].filter((course) => course.id == id)[0];

  const isNameShort = course.name.length <= 45;

  return (
    <>
      <div
        className={`mb-4 ${
          isNameShort ? "d-xl-flex justify-content-between" : ""
        }`}
      >
        <h1 className={isNameShort ? "m-xl-0" : ""}>{course.name}</h1>
        <DownloadButton
          className="btn btn-primary"
          pdfUrl={`${pathname}.pdf`}
          fileName={course.name + ".pdf"}
        >
          Download <i class="bi bi-download ms-2"></i>
        </DownloadButton>
      </div>

      {course.onlineUrl && (
        <div className="mb-3">
          View Online:{" "}
          <Link to={course.onlineUrl} target="_blank">
            {course.onlineUrl}
          </Link>
        </div>
      )}

      <PDFViewer pdfUrl={`${pathname}.pdf`} />

      <div className="row m-3">
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
