import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import Button from "../ui/button";
import { VsArrowLeft, VsRunAll } from "solid-icons/vs";
import Docs from "../../docs";
import Editor from "./editor";
import { A } from "@solidjs/router";

const Playground: Component = () => {
  const [code, setCode] = createSignal("");
  const [returnData, setReturnData] = createSignal<null | string>(null);
  const [logs, setLogs] = createSignal<null | string>(null);
  const [error, setError] = createSignal<null | string>(null);
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
        body: code(),
      });

      const { data, logs, error } = await res.json();

      setReturnData(data);
      setLogs(logs);
      setError(error);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
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
        <Docs />
        <Editor
          logs={logs}
          returnData={returnData}
          setCode={setCode}
          error={error}
        />
      </div>

      <div class="md:hidden flex flex-col justify-between items-center text-center">
        <h1 class="text-8xl pb-1 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-pink-400 to-purple-400">
          Sorry!
        </h1>
        <p class="mt-8 mb-8 text-xl text-sky-400">
          The DE Playground is meant for desktop and laptop users only.
          <br /> <br /> Please use a desktop computer instead.️
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
