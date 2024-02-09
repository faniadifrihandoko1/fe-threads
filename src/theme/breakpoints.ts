import { createBreakpoints } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

export const breakpoints = createBreakpoints({
  sm: "375px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1680px",
});

export default extendTheme({ breakpoints });
