import type { Component } from "solid-js";

import styles from "./play.module.css";
import { FaSolidArrowLeftLong } from "solid-icons/fa";
import { A } from "@solidjs/router";

const Playground: Component = () => {
  return (
    <div class="flex justify-center flex-col items-center">
      <h1 class="text-4xl text-white">Playground</h1>
      <p class="text-3xl text-sky-500 mt-8">Coming soon... 🚧</p>
      <A
        href="/"
        class="relative inline-flex items-center justify-center p-4 px-10 py-3 mt-10 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
      >
        <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-purple-500 rounded-full blur-md ease"></span>
        <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
          <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-sky-500 rounded-full blur-md"></span>
          <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
        </span>
        <span class="relative text-white flex items-center justify-center">
          <FaSolidArrowLeftLong class="mr-2" size={20} fill="#fff" />
          Back To Home &nbsp;
        </span>
      </A>
    </div>
  );
};

export default Playground;
