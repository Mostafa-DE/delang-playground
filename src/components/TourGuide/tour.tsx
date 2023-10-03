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
        <span class="mb-2 text-white text-center text-2xl md:text-4xl">
          Welcom To DE Tour Guide
        </span>
        <span class="text-white text-center text-xl md:text-2xl">
          Please select the section you want to learn
        </span>
        <A class="text-blue-500 mt-8 text-xl" href="/play/welcome/w1">
          Welcome, Hola, مرحبا
        </A>
        <A class="text-blue-500 mt-4 text-xl" href="/play/basics/welcome">
          Basics
        </A>
      </div>
    </div>
  );
};

export default TourGuide;
