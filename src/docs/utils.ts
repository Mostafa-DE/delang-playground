import { basics, welcome, flowControl, dataStructures } from "../docs/examples";

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
    default:
      return welcome;
  }
};
