import type { Component } from "solid-js";

const Playground: Component = () => {
  return (
    <div class="flex h-full">
      <div class="w-10/12 h-full bg-gray-800 p-6 overflow-y-auto text-white rounded-tl-3xl rounded-bl-3xl">
        <h2 class="text-xl font-semibold mb-4">Documentation</h2>
        <p class="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </div>
      <div class="w-3/4 flex flex-col">
        <div class="h-2/3 bg-gray-700 p-6 rounded-tr-3xl">
          <h2 class="text-xl font-semibold mb-4 text-white">Code Editor</h2>
          <textarea class="w-full h-80 bg-gray-600 text-white border border-gray-500 rounded p-3 resize-none focus:outline-none"></textarea>
        </div>
        <div class="h-1/3 bg-gray-600 p-6 overflow-y-auto rounded-br-3xl">
          <h2 class="text-xl font-semibold mb-4 text-white">Output</h2>
          <pre class="bg-gray-500 p-3 text-white">
            Output will appear here...
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Playground;
