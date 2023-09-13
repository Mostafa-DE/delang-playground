import { CodeMirror } from "@solid-codemirror/codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import ErrorMessage from "../ui/errorMessage";
import InfoMessage from "../ui/infoMessage";
import type { EditorView } from "@codemirror/view";
import { Component } from "solid-js";
import { handleKeyDown } from "../playground/helpers";
import { testCode } from "../playground/testCode";

type Props = {
  setCode: (code: string) => void;
  logs: () => string | null;
  returnData: () => string | null;
  error: () => string | null;
};

const handleShowTestCode = (view: EditorView) => {
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

const Editor: Component<Props> = ({ setCode, logs, returnData, error }) => {
  const onValueChange = (value: string) => {
    setCode(value);
  };

  const onEditorMount = (view: EditorView) => {
    view.focus();
    handleShowTestCode(view);
    handleKeyDown(view);
  };

  return (
    <div class="w-3/4 flex flex-col">
      <div class="h-full bg-gray-700 p-6 rounded-tr-3xl overflow-auto">
        <h2 class="text-xl bg-transparent focus:outline-none font-semibold mb-4 text-white">
          Code Editor
        </h2>
        <CodeMirror
          spellcheck={false}
          wrapLine={true}
          theme={oneDark}
          extensions={[basicSetup, javascript()]}
          onValueChange={onValueChange}
          onEditorMount={onEditorMount}
        />
      </div>
      <div class="h-1/2 bg-gray-700 p-6 overflow-y-auto rounded-br-3xl">
        <h2 class="text-xl font-semibold mb-4 text-white">Output</h2>
        <pre class="text-white">
          {!logs() && !returnData() && !error() && (
            <InfoMessage msg={"The Output will be shown here!"} />
          )}
          {logs() && <InfoMessage msg={logs() ?? ""} />}
          {returnData() && <InfoMessage msg={returnData() ?? ""} />}
          {error() && <ErrorMessage msg={error() ?? ""} />}
        </pre>
      </div>
    </div>
  );
};

export default Editor;
