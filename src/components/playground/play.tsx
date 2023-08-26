import type { Component } from "solid-js";
import type { EditorView } from "@codemirror/view";
import { createSignal } from "solid-js";
import Button from "../ui/button";
import { VsArrowLeft, VsRunAll } from "solid-icons/vs";
import {
  RiArrowsArrowRightDoubleFill,
  RiArrowsArrowLeftDoubleFill,
} from "solid-icons/ri";
import Docs from "../../docs";
import { CodeMirror } from "@solid-codemirror/codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { handleKeyDown } from "../playground/helpers";

const testCode = `let logName = fun() {
  return "DE Lang is Awesome! 🚀";
}

logName();
`;

const habdleShowTestCode = (view: EditorView) => {
  const { from, to } = view.state.selection.main;
  view.dispatch({
    changes: {
      from,
      to,
      insert: testCode,
    },
  });

  // move cursor to the end
  view.dispatch({
    selection: {
      anchor: view.state.doc.length,
      head: view.state.doc.length,
    },
  });
};

const Playground: Component = () => {
  const [code, setCode] = createSignal(testCode);
  const [output, setOutput] = createSignal("");
  const [loading, setLoading] = createSignal(false);

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

  const onValueChange = (value: string) => {
    setCode(value);
  };

  const onEditorMount = (view: EditorView) => {
    view.focus();
    habdleShowTestCode(view);
    handleKeyDown(view);
  };

  return (
    <>
      <div class="hidden md:block">
        <Button
          icon={<VsArrowLeft />}
          text=""
          link="/"
          style={{ padding: "0 0.4rem 0 0" }}
        />
      </div>
      <div class="hidden md:flex md:justify-center">
        <Button
          loading={loading}
          text="Run"
          icon={<VsRunAll size={17} />}
          handleClick={handleRun}
          style={{ padding: "0.5rem 2.5rem", margin: "-2rem 0 0.5rem 0" }}
        />
      </div>
      <div class="hidden md:flex md:h-full">
        <div class="w-8/12 flex flex-col justify-between h-full bg-gray-800 p-6 text-white rounded-tl-3xl rounded-bl-3xl">
          <div class="overflow-y-auto">
            <h2 class="text-xl font-semibold mb-4">Documentation</h2>
            <Docs />
          </div>
          <div class="flex justify-center mt-4">
            <div>
              <Button
                icon={<RiArrowsArrowLeftDoubleFill size={22} />}
                text=""
                style={{ padding: "0 0.4rem 0 0", margin: "0 0.5rem 0 0" }}
              />
              1 of 1
              <Button
                icon={<RiArrowsArrowRightDoubleFill size={22} />}
                text=""
                style={{ padding: "0 0.4rem 0 0", margin: "0 0 0 0.5rem" }}
              />
            </div>
          </div>
        </div>
        <div class="w-3/4 flex flex-col">
          <div class="h-full bg-gray-700 p-6 rounded-tr-3xl overflow-auto">
            <h2 class="text-xl bg-transparent focus:outline-none font-semibold mb-4 text-white">
              Code Editor
            </h2>
            <CodeMirror
              wrapLine={true}
              theme={oneDark}
              extensions={[basicSetup, javascript()]}
              onValueChange={onValueChange}
              onEditorMount={onEditorMount}
            />
          </div>
          <div class="h-1/3 bg-gray-600 p-6 overflow-y-auto rounded-br-3xl">
            <h2 class="text-xl font-semibold mb-4 text-white">Output</h2>
            <pre class="bg-gray-500 p-3 text-white">
              {output() || "Output will be displayed here."}
            </pre>
          </div>
        </div>
      </div>
      <div class="md:hidden flex flex-col justify-between items-center text-center">
        <h1 class="text-8xl pb-1 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-pink-400 to-purple-400">
          Sorry!
        </h1>
        <p class="mt-8 mb-8 text-xl text-sky-400">
          🎮 The DE Playground is reserved for desktop and laptop adventurers –
          apologies, mobile users! 📱🚫 It's time to unlock the excitement on
          larger screens. 🖥️
        </p>
        <Button
          text="Back To Home"
          link="/"
          iconPosition="left"
          icon={<VsArrowLeft size={20} />}
        />
      </div>
    </>
  );
};

export default Playground;
