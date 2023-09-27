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
        <h1 class="text-white">
          Welcom To DE Tour Guide, Please Select Your Destination
        </h1>
        <A class="underline text-blue-500 mt-8 text-lg" href="/play/welcome/w1">
          Welcome, Hola, مرحبا
        </A>
        <A
          class="underline text-blue-500 mt-8 text-lg"
          href="/play/basics/variables"
        >
          Basics
        </A>
      </div>
    </div>
  );
};

export default TourGuide;
