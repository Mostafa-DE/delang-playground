import {
  basics,
  welcome,
  flowControl,
  dataStructures,
  builtInFunc,
  advanced,
} from "../docs/examples";

export const getCurrentSectionData = (section: string) => {
  switch (section) {
    case "basics":
      return basics;
    case "welcome":
      return welcome;
    case "flowControl":
      return flowControl;
    case "dataStructures":
      return dataStructures;
    case "builtInFunc":
      return builtInFunc;
    case "advanced":
      return advanced;
    default:
      return welcome;
  }
};
