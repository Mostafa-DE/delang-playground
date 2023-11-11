import type { Component } from "solid-js";
import { A } from "@solidjs/router";
import { VsArrowLeft } from "solid-icons/vs";

const TourGuide: Component = () => {
  return (
    <div>
      <div class="hidden md:block">
        <A
          href="/"
          class="relative inline-flex items-center justify-center px-2 py-1 overflow-hidden font-medium bg-sky-500 rounded-lg shadow-2xl group"
        >
          <span class="relative text-white flex items-center justify-center">
            <VsArrowLeft />
          </span>
        </A>
      </div>
      <div class="flex flex-col justify-center items-center">
        <span class="mb-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-pink-400 to-purple-400 text-center text-2xl md:text-4xl">
          Welcom To DE Tour Guide
        </span>
        <span class="text-center text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-pink-400 to-purple-400">
          Please select the section you want to learn
        </span>
        <A
          class="text-white mt-8 text-xl border-b-2 hover:text-blue-500 transition hover:border-blue-500"
          href="/play/welcome/w1"
        >
          Welcome, Hola, مرحبا
        </A>
        <A
          class="text-white mt-4 text-xl border-b-2 hover:text-blue-500 transition hover:border-blue-500"
          href="/play/dataTypes/welcome"
        >
          Data Types
        </A>
        <A
          class="text-white mt-4 text-xl border-b-2 hover:text-blue-500 transition hover:border-blue-500"
          href="/play/basics/welcome"
        >
          Basics
        </A>
        <A
          class="text-white mt-4 text-xl border-b-2 hover:text-blue-500 transition hover:border-blue-500"
          href="/play/flowControl/welcome"
        >
          Flow Control
        </A>
        <A
          class="text-white mt-4 text-xl border-b-2 hover:text-blue-500 transition hover:border-blue-500"
          href="/play/dataStructures/welcome"
        >
          Data Structures
        </A>
        <A
          class="text-white mt-4 text-xl border-b-2 hover:text-blue-500 transition hover:border-blue-500"
          href="/play/builtInFunc/welcome"
        >
          Built-in Functions
        </A>
        <A
          class="text-white mt-4 text-xl border-b-2 hover:text-blue-500 transition hover:border-blue-500"
          href="/play/advanced/welcome"
        >
          Advanced Topics
        </A>
      </div>
    </div>
  );
};

export default TourGuide;
