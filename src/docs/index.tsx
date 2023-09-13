import type { Component } from "solid-js";
import {
  RiArrowsArrowRightDoubleFill,
  RiArrowsArrowLeftDoubleFill,
} from "solid-icons/ri";
import { A } from "@solidjs/router";

const Docs: Component = () => (
  <div class="w-6/12 flex flex-col justify-between h-full bg-gray-800 p-6 text-white rounded-tl-3xl rounded-bl-3xl">
    <div class="overflow-y-auto">
      <h2 class="text-xl font-semibold mb-4">Documentation</h2>
      <div class="text-white">
        <p class="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum
          dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit
          amet, consectetur adipiscing elit... Lorem ipsum dolor sit
          <br />
          <br />
          amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet,
          consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur
          adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing
          elit... Lorem ipsum dolor sit amet,
        </p>
      </div>
    </div>
    <div class="flex justify-center mt-4">
      <div class="flex">
        <A
          href={"#"}
          class="relative inline-flex items-center justify-center mr-3 px-1 overflow-hidden font-medium bg-sky-500 rounded-lg shadow-2xl group"
        >
          <span class="relative text-white flex items-center justify-center">
            <RiArrowsArrowLeftDoubleFill size={22} />
          </span>
        </A>
        1 of 1
        <A
          href={"#"}
          class="relative inline-flex items-center justify-center ml-3 px-1 overflow-hidden font-medium bg-sky-500 text-indigo-600 rounded-lg shadow-2xl group"
        >
          <span class="relative text-white flex items-center justify-center">
            <RiArrowsArrowRightDoubleFill size={22} />
          </span>
        </A>
      </div>
    </div>
  </div>
);

export default Docs;
