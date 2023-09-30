import { CodeMirror } from "@solid-codemirror/codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import ErrorMessage from "../ui/errorMessage";
import InfoMessage from "../ui/infoMessage";
import type { EditorView } from "@codemirror/view";
import { Component, createEffect } from "solid-js";
import { handleKeyDown } from "../playground/helpers";
import { basics, welcome } from "../../docs/examples";
import { useParams } from "@solidjs/router";

type Props = {
  code: () => string;
  setCode: (code: string) => void;
  logs: () => string | null;
  returnData: () => string | null;
  error: () => string | null;
  exampleData: () => { id: number; slug: string };
  timeout: () => string;
};

type Section = Array<{
  slug: string;
  code: string;
}>;

const getExample = (section: Section, slug: string) => {
  return section.find((ex) => ex.slug === slug) ?? section[0];
};

const getCurrentSectionData = (section: string) => {
  switch (section) {
    case "basics":
      return basics;
    case "welcome":
      return welcome;
    default:
      return welcome;
  }
};

const Editor: Component<Props> = ({
  code,
  setCode,
  logs,
  returnData,
  error,
  timeout,
}) => {
  const onValueChange = (value: string) => {
    setCode(value);
  };

  const params = useParams();

  const sectionData = getCurrentSectionData(params.section);

  const handleOnEditorMount = (view: EditorView) => {
    view.focus();
    handleKeyDown(view);
    setCode(getExample(sectionData, params.example).code);

    // move cursor to the end
    view.dispatch({
      selection: {
        anchor: view.state.doc.length,
        head: view.state.doc.length,
      },
    });

    // prevent ctrl + s from opening the browser save dialog
    view.dom.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
      }
    });
  };

  createEffect(() => {
    setCode(getExample(sectionData, params.example).code);
  }, [params.example]);

  return (
    <div class="w-3/4 flex flex-col">
      <div class="h-3/2 bg-gray-700 p-6 rounded-tr-3xl overflow-hidden">
        <pre class="text-md mb-4 text-white">
          <code class=" bg-slate-600 rounded p-1 ">{`${params.example}.de`}</code>
        </pre>
        <CodeMirror
          spellcheck={false}
          value={code()}
          wrapLine={true}
          theme={oneDark}
          extensions={[basicSetup, javascript()]}
          onValueChange={onValueChange}
          onEditorMount={handleOnEditorMount}
        />
      </div>
      <div class="h-1/2 bg-gray-700 p-6 overflow-y-auto rounded-br-3xl">
        {/* {Boolean(timeout()) && (
          <ErrorMessage msg={`Timeout: ${timeout() ?? ""}`} />
        )} */}
        <h2 class="text-xl font-semibold mb-4 text-white">Logs</h2>
        <pre class="text-white">
          {!logs() && !returnData() && !error() && (
            <InfoMessage msg={"The logs will be shown here!"} />
          )}
          {logs() && <InfoMessage msg={logs() ?? ""} />}
          {error() && <ErrorMessage msg={error() ?? ""} />}
          {timeout() === "true" && (
            <ErrorMessage msg={"Timeout The code took too long to execute."} />
          )}

          <h2 class="text-xl font-semibold mb-4 text-white">Return Data</h2>
          {!returnData() && (
            <InfoMessage msg={"The returned values will be shown here!"} />
          )}
          {returnData() && <InfoMessage msg={returnData() ?? ""} />}
        </pre>
      </div>
    </div>
  );
};

export default Editor;
