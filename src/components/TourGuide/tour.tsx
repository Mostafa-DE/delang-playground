import type { Component } from "solid-js";
import { A } from "@solidjs/router";
import { VsArrowLeft, VsArrowRight } from "solid-icons/vs";

const TourGuide: Component = () => {
  const sections = [
    { name: "Welcome, Hola, مرحبا", link: "welcome/w1" },
    { name: "Data Types", link: "dataTypes/welcome" },
    { name: "Basics", link: "basics/welcome" },
    { name: "Flow Control", link: "flowControl/welcome" },
    { name: "Data Structures", link: "dataStructures/welcome" },
    { name: "Built-in Functions", link: "builtInFunc/welcome" },
    { name: "Advanced Topics", link: "advanced/welcome" },
  ];

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
        <span class="text-center text-xl mb-6 md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-pink-400 to-purple-400">
          Please select the section you want to learn
        </span>
        {sections.map((section) => (
          <A
            href={`/play/${section.link}`}
            class="relative inline-flex items-center justify-center mb-4 px-10 py-1/2 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-sky-500 rounded-full shadow-md group"
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-sky-500 group-hover:translate-x-0 ease">
              <VsArrowRight class="text-lg" />
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
              {section.name}
            </span>
            <span class="relative invisible p-1">Button Text</span>
          </A>
        ))}

        <A
          href="/play/exercises/welcome"
          class="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span class="relative text-white">Exercises</span>
        </A>
      </div>
    </div>
  );
};

export default TourGuide;
