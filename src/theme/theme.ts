import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";
import { globalStyles } from "./style";
import { buttonStyles } from "../components/button";
import { badgeStyles } from "../components/badge";
export default extendTheme(
  { breakpoints },
  globalStyles,
  buttonStyles,
  badgeStyles
);
