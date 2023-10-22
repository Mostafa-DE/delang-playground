import type { Component } from "solid-js";
import PDFViewerApp from "./PDFViewerApp";

const PdfDoc: Component = () => {
  const pdfFilePath = "src/assets/test.pdf";
  return <PDFViewerApp {...{ pdfFilePath }} />;
};

export default PdfDoc;
