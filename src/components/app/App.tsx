import type { Component } from "solid-js";

import logo from "../../assets/imgs/delang.png";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.main}>
      <div class={styles.container}>
        <img src={logo} class={styles.logo} alt="delang logo" />
        <h1>
          Welcome to <code>DE</code> Language Land 🚀
        </h1>
        <p>
          Unleash innovation in code with DE - where simplicity meets
          versatility.
        </p>
        <div>
          <button class={styles.startedBtn}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default App;
