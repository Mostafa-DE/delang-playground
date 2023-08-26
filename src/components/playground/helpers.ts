import { EditorView } from "@codemirror/view";

export const handleCodeLineNumbers = (
  textareaRef: HTMLTextAreaElement,
  setRows: (arg: number) => void
) => {
  const lines = textareaRef.value.split("\n");
  const lineNumberContainer = document.getElementById("line-number");

  if (lineNumberContainer) {
    lineNumberContainer.innerHTML = "";

    for (let i = 1; i <= lines.length; i++) {
      const lineDiv = document.createElement("div");
      lineDiv.textContent = i.toString();
      lineNumberContainer.appendChild(lineDiv);

      if (lines.length > 14) {
        setRows(lines.length);
      }
    }
  }
};

export const handleKeyDown = (view: EditorView) => {
  view.dom.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      event.preventDefault();

      const { from, to } = view.state.selection.main;
      const tab = " ".repeat(2);
      view.dispatch({
        changes: { from, to, insert: tab },
      });

      // Set the new selection position
      const newSelectionPosition = from + tab.length;
      view.dispatch({
        selection: {
          anchor: newSelectionPosition,
          head: newSelectionPosition,
        },
      });
    }
  });
};
