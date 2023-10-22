import type { Component } from "solid-js";
import PDFViewerApp from "./PDFViewerApp";
import deDoc from "../../assets/test.pdf";

const PdfDoc: Component = () => {
  const pdfFilePath = deDoc;
  return <PDFViewerApp {...{ pdfFilePath }} />;
};

export default PdfDoc;
