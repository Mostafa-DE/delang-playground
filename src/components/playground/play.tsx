import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import Button from "../ui/button";
import { VsArrowLeft, VsRunAll } from "solid-icons/vs";
import Docs from "../../docs/docs";
import Editor from "./editor";
import { A, Params, useParams } from "@solidjs/router";
import { getCurrentSectionData } from "../../docs/utils";
import TableOfContent from "../contentOfTable";

const getExampleDataFromParams = (params: Params) => {
  const { section, example } = params;
  let dataToReturn = { id: 0, slug: "" };
  const sectionData = getCurrentSectionData(section);
  sectionData.forEach((ex, i) => {
    if (ex.slug === example) {
      dataToReturn = { id: i, slug: ex.slug };
    }
  });

  return dataToReturn;
};

const Playground: Component = () => {
  const params = useParams();
  const [code, setCode] = createSignal("");
  const [returnData, setReturnData] = createSignal<null | string>(null);
  const [logs, setLogs] = createSignal<null | string>(null);
  const [timeout, setTimeout] = createSignal<string>("false");
  const [error, setError] = createSignal<null | string>(null);
  const [runError, setRunError] = createSignal<null | string>(null);
  const [loading, setLoading] = createSignal(false);
  const [runLoading, setRunLoading] = createSignal(false);
  const [example, setExample] = createSignal<{
    id: number;
    slug: string;
  }>(getExampleDataFromParams(params));
  const [html, setHtml] = createSignal<null | string>(null);

  const handleRun = async () => {
    try {
      setRunLoading(true);
      const url = import.meta.env.VITE_API_URL;
      const res = await fetch(`${url}/api/exec`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: code(),
      });

      const { data, logs, error, timeout } = await res.json();

      setReturnData(data);
      setLogs(logs);
      setRunError(error);
      setTimeout(timeout);

      setRunLoading(false);
    } catch (error) {
      console.log(error);
      setRunLoading(false);
    }
  };

  const handleGetExample = async (slug: string | null) => {
    if (!slug) {
      slug = params.example;
    }

    try {
      setLoading(true);
      const url = import.meta.env.VITE_API_URL;
      const res = await fetch(`${url}/api/examples/${params.section}/${slug}`);

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

  return (
    <>
      <div class="flex justify-between items-center">
        <A
          href="/play"
          class="relative hidden md:inline-flex items-center justify-center px-2 py-1 overflow-hidden font-medium bg-sky-500 rounded-lg shadow-2xl group"
        >
          <span class="relative text-white flex items-center justify-center">
            <VsArrowLeft />
          </span>
        </A>
        <Button
          loading={runLoading}
          text="Run"
          icon={<VsRunAll size={17} />}
          handleClick={handleRun}
          style={{ padding: "0.3rem 2.5rem", margin: "0 0 0.5rem 0" }}
        />
        <TableOfContent setExample={setExample} getExample={handleGetExample} />
      </div>
      <div class="flex flex-col-reverse lg:flex-row lg:h-full">
        <Docs
          exampleData={example}
          setExample={setExample}
          setCode={setCode}
          getExample={handleGetExample}
          html={html}
          loading={loading}
          error={error}
        />
        <Editor
          handleRun={handleRun}
          code={code}
          logs={logs}
          timeout={timeout}
          returnData={returnData}
          setCode={setCode}
          error={runError}
          exampleData={example}
        />
      </div>

      <div class="hidden flex-col justify-between items-center text-center">
        <h1 class="text-7xl mt-10 pb-1 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-pink-400 to-purple-400">
          Sorry!
        </h1>
        <p class="my-8 text-xl text-sky-300">
          The DE Playground is not designed for small screens. Please access the
          playground on a larger screen.
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
