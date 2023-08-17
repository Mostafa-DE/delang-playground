import type { Component } from "solid-js";
import { createSignal, createEffect, onMount } from "solid-js";
import { handleCodeLineNumbers } from "./helpers";
import Button from "../ui/button";
import { VsArrowLeft, VsRunAll } from "solid-icons/vs";
import {
  RiArrowsArrowRightDoubleFill,
  RiArrowsArrowLeftDoubleFill,
} from "solid-icons/ri";
import Docs from "../../docs";

const Playground: Component = () => {
  const [code, setCode] = createSignal("");
  const [rows, setRows] = createSignal(14);
  const [output, setOutput] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  let textareaRef: HTMLTextAreaElement = {} as HTMLTextAreaElement;

  createEffect(() => {
    onMount(() => {
      textareaRef.focus();
      handleCodeLineNumbers(textareaRef, setRows);
    });

    if (textareaRef.value) {
      textareaRef.addEventListener("input", () => {
        handleCodeLineNumbers(textareaRef, setRows);
      });
    }
  });

  const handleRun = async () => {
    try {
      setLoading(true);
      const url = import.meta.env.VITE_API_URL;
      const res = await fetch(`${url}/api/exec`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code(),
        }),
      });

      const { data } = await res.json();

      setOutput(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        icon={<VsArrowLeft />}
        text=""
        link="/"
        style={{ padding: "0 0.3rem" }}
      />
      <div class="flex justify-center">
        <Button
          loading={loading}
          text="Run"
          icon={<VsRunAll size={17} />}
          handleClick={handleRun}
          style={{ padding: "0.5rem 2.5rem", margin: "-2rem 0 0.5rem 0" }}
        />
      </div>
      <div class="flex h-full">
        <div class="w-10/12 flex flex-col justify-between h-full bg-gray-800 p-6 text-white rounded-tl-3xl rounded-bl-3xl">
          <div class="overflow-y-auto">
            <h2 class="text-xl font-semibold mb-4">Documentation</h2>
            <Docs />
          </div>
          <div class="flex justify-center mt-4">
            <div>
              <Button
                icon={<RiArrowsArrowLeftDoubleFill size={22} />}
                text=""
                style={{ padding: "0 0.3rem", margin: "0 0.5rem 0 0" }}
              />
              1 of 1
              <Button
                icon={<RiArrowsArrowRightDoubleFill size={22} />}
                text=""
                style={{ padding: "0 0.3rem", margin: "0 0 0 0.5rem" }}
              />
            </div>
          </div>
        </div>
        <div class="w-3/4 flex flex-col">
          <div class="h-2/3 bg-gray-700 p-6 rounded-tr-3xl overflow-auto">
            <h2 class="text-xl bg-transparent focus:outline-none font-semibold mb-4 text-white">
              Code Editor
            </h2>
            <div class="flex">
              <div class="bg-gray-600 w-8 h-full text-center text-gray-300">
                <span class="text-white" id="line-number"></span>
              </div>
              <textarea
                ref={textareaRef}
                class="w-full h-full resize-none focus:outline-none bg-transparent text-white pl-8"
                rows={rows()}
                value={code()}
                onInput={(event) => {
                  setCode(event.currentTarget.value);
                  handleCodeLineNumbers(textareaRef, setRows);
                }}
              ></textarea>
            </div>
          </div>
          <div class="h-1/3 bg-gray-600 p-6 overflow-y-auto rounded-br-3xl">
            <h2 class="text-xl font-semibold mb-4 text-white">Output</h2>
            <pre class="bg-gray-500 p-3 text-white">
              {output() || "Output will be displayed here."}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playground;
