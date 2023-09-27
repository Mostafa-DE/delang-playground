import type { Component } from "solid-js";
import NotFoundPage from "./components/404";

import Home from "./components/home";
import Playground from "./components/playground";
import TourGuide from "./components/TourGuide/tour";
import "./index.css";
import { Route, Router, Routes } from "@solidjs/router";

const App: Component = () => {
  return (
    <div id="main">
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/play" component={TourGuide} />
          <Route path="/play/:section/:example" component={Playground} />
          <Route path="/*" component={NotFoundPage} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
