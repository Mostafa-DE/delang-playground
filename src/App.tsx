import type { Component } from "solid-js";

import Home from "./components/home";
import Playground from "./components/playground";
import "./index.css";
import { Route, Router, Routes } from "@solidjs/router";

const App: Component = () => {
  return (
    <div id="main">
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/play" component={Playground} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
