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
