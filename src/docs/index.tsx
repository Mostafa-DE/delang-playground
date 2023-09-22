import type { Component } from "solid-js";
import { createSignal, onMount } from "solid-js";
import {
  RiArrowsArrowRightDoubleFill,
  RiArrowsArrowLeftDoubleFill,
} from "solid-icons/ri";
import { A } from "@solidjs/router";
import { effect } from "solid-js/web";

const Docs: Component = () => {
  const [html, setHtml] = createSignal<null | string>(null);
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal<null | string>(null);

  const handleGetExample = async (slug = "helloWorld") => {
    try {
      setLoading(true);
      const url = import.meta.env.VITE_API_URL;
      const res = await fetch(`${url}/api/examples/${slug}`);

      const { html, error } = await res.json();

      setHtml(html);
      setError(error);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError("Something went wrong while fetching the example.");
      setLoading(false);
    }
  };

  effect(async () => {
    await handleGetExample();
  });

  return (
    <div class="w-6/12 flex flex-col justify-between h-full bg-gray-800 p-6 text-white rounded-tl-3xl rounded-bl-3xl">
      <div class="overflow-y-auto">
        <div class="text-white">
          <div innerHTML={html() ?? ""}></div>
          {loading() && <div>Loading...</div>}
          {error() && <div class="text-red-500">{error()}</div>}
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
};

export default Docs;
