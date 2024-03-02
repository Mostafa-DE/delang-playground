import { CodeMirror } from "@solid-codemirror/codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import ErrorMessage from "../ui/errorMessage";
import InfoMessage from "../ui/infoMessage";
import type { EditorView } from "@codemirror/view";
import { Component, createEffect } from "solid-js";
import { handleKeyDown } from "../playground/helpers";
import { getCurrentSectionData } from "../../docs/utils";
import { useParams } from "@solidjs/router";

type Props = {
  code: () => string;
  setCode: (code: string) => void;
  logs: () => string | null;
  returnData: () => string | null;
  error: () => string | null;
  exampleData: () => { id: number; slug: string };
  timeout: () => string;
  handleRun: () => Promise<void>;
};

type Section = Array<{
  slug: string;
  code: string;
}>;

const getExample = (section: Section, slug: string) => {
  return section.find((ex) => ex.slug === slug) ?? section[0];
};

const Editor: Component<Props> = ({
  code,
  setCode,
  logs,
  returnData,
  error,
  timeout,
  handleRun,
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

    view.dom.addEventListener("keydown", (evnt) => {
      if (evnt.ctrlKey && evnt.key === "s") {
        evnt.preventDefault();
      }

      if (evnt.altKey && evnt.key === "Enter") {
        evnt.preventDefault();
        handleRun();
      }
    });
  };

  const handleLogsValues = () => {
    if (logs() && !error()) {
      return <InfoMessage msg={logs() ?? ""} />;
    }

    if (error()) {
      return <ErrorMessage msg={error() ?? ""} />;
    }

    if (timeout() === "true") {
      return (
        <ErrorMessage msg={"Timeout The code took too long to execute."} />
      );
    }

    return <InfoMessage msg={"The logs will be shown here!"} />;
  };

  const handleReturnData = () => {
    if (returnData()) {
      return <InfoMessage msg={returnData() ?? ""} />;
    }

    return <InfoMessage msg={"The returned values will be shown here!"} />;
  };

  createEffect(() => {
    setCode(getExample(sectionData, params.example).code);
  }, [params.example]);

  return (
    <div class="lg:w-3/4 flex flex-col">
      <div class="bg-gray-700 p-6 ">
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
      <div class="h-1/2 bg-gray-700 p-6 overflow-y-auto">
        <h2 class="text-xl font-semibold mb-4 text-white">Logs</h2>
        <pre class="text-white whitespace-pre-wrap">
          {handleLogsValues()}
          <h2 class="text-xl font-semibold mb-4 text-white">Return Data</h2>
          {handleReturnData()}
        </pre>
      </div>
    </div>
  );
};

export default Editor;
