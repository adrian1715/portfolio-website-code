import React, { useState } from "react";
import Spinner from "./UI/Spinner";

const DownloadCV = ({ ...props }) => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const pdfUrl = "/cv.pdf";

  const handleDownload = async () => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "curriculum.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setIsDownloaded(true);
      setTimeout(() => setIsDownloaded(false), 1000);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <button {...props} onClick={handleDownload} disabled={isDownloaded}>
      {!isDownloaded ? (
        <>
          Download CV<i className="bi bi-file-earmark-text-fill ms-2"></i>
        </>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          <span className="me-3">Downloading...</span>
          <Spinner />
        </div>
      )}
    </button>
  );
};

export default DownloadCV;
