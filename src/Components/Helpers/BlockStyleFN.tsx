import { ContentBlock } from "draft-js";

export const blockstylefn = (contentBlock: ContentBlock): string => {
  const type = contentBlock.getType();
  switch (type) {
    case "header-one":
      return "text-4xl font-bold";
    case "header-five":
      return "text-xl font-bold";
    case "unstyled":
      return "text-base";
    default:
      return "";
  }
};
