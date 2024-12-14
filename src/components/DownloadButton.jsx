import React, { useState } from "react";
import Spinner from "./UI/Spinner";

const DownloadCV = ({ pdfUrl, fileName, ...props }) => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = async () => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
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
          <>{props.children}</>
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
