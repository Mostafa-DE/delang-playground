import type { Component } from "solid-js";
import NotFoundPage from "./components/404";

import Home from "./components/home";
import Playground from "./components/playground";
import TourGuide from "./components/TourGuide/tour";
import "./index.css";
import { Route, Router, Routes } from "@solidjs/router";
import About from "./components/about/about";
import PdfDoc from "./components/pdfDoc/pdfDoc";
import "@pdfslick/solid/dist/pdf_viewer.css";
import DEDownload from "./components/DEUbuntuDownload";

const App: Component = () => {
  return (
    <div id="main">
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/play" component={TourGuide} />
          <Route path="/play/:section/:example" component={Playground} />
          <Route path="/about" component={About} />
          <Route path="/de-doc" component={PdfDoc} />
          <Route path="/DE/ubuntu/download" component={DEDownload} />
          <Route path="/*" component={NotFoundPage} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
