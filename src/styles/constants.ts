import { palette } from "./palette";
import { breakpointValues } from "./breakpoints";
import { typography } from "./typography";

export const muiTheme = {
  palette,
  typography,
  shape: {
    borderRadius: 5,
    // other shape properties...
  },
  breakpoints: { values: breakpointValues },
};

export const SPACING = {
  SMALL: 1,
  NORMAL: 2,
  LARGE: 3,
};
