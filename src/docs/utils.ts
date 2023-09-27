import { basics, welcome } from "../docs/examples";

export const getCurrentSectionData = (section: string) => {
  switch (section) {
    case "basics":
      return basics;
    case "welcome":
      return welcome;
    default:
      return welcome;
  }
};
