import type { Component } from "solid-js";
import Footer from "../footer";
import Header from "../header";
import Showcase from "../showcase";

const Home: Component = () => {
  return (
    <div>
      <div class="h-full">
        <Header />
        <Showcase />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
