import React from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PDFViewer = ({ pdfUrl }) => {
  return (
    <Document file={pdfUrl}>
      <Page
        pageNumber={1}
        scale={1}
        renderAnnotationLayer={false}
        renderTextLayer={false}
      />
    </Document>
  );
};
export default PDFViewer;
