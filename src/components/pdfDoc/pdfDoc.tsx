import type { Component } from "solid-js";
import Header from "../header";

const PdfDoc: Component = () => {
  return (
    <>
      <Header />
      <div class="h-full">
        <h1 class="text-5xl text-center text-white">Delang PDF Doc</h1>
      </div>
    </>
  );
};

export default PdfDoc;
