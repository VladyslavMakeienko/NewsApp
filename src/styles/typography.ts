import { createTheme } from "@mui/material/styles";
import { breakpointValues } from "./breakpoints";

const theme = createTheme({
  breakpoints: { values: breakpointValues },
});

export const typography = {
  fontFamily: ["Inter", "sans-serif"].join(", "),
  h1: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: "37px",
    [theme.breakpoints.down("lg")]: {
      fontSize: 30,
      lineHeight: "35px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 28,
      lineHeight: "32px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 26,
      lineHeight: "30px",
    },
  },
  h2: {
    fontWeight: 600,
    fontSize: 26,
    lineHeight: "30px",
    [theme.breakpoints.down("md")]: {
      fontSize: 22,
      lineHeight: "26px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      lineHeight: "24px",
    },
  },
  h3: {
    fontWeight: 600,
    fontSize: 22,
    lineHeight: "26px",
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      lineHeight: "24px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      lineHeight: "22px",
    },
  },
  h4: {
    fontWeight: 400,
    fontSize: 22,
    lineHeight: "26px",
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      lineHeight: "24px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      lineHeight: "22px",
    },
  },
  h5: {
    fontWeight: 400,
    fontSize: 20,
    lineHeight: "24px",
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
      lineHeight: "22px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "20px",
    },
  },
  h6: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: "24px",
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
      lineHeight: "22px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "20px",
    },
  },
  body1: {
    fontSize: 18,
    lineHeight: "22px",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      lineHeight: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "28px",
    },
  },
  body2: {
    fontSize: 18,
    lineHeight: "22px",
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      lineHeight: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "28px",
    },
  },
  body3: {
    fontSize: 16,
    lineHeight: "20px",
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
      lineHeight: "17px",
    },
  },
  body4: {
    fontSize: 16,
    lineHeight: "20px",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
      lineHeight: "17px",
    },
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "17px",
  },
  subtitle2: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "17px",
  },
  subtitle3: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "17px",
  },
  subtitle4: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: "15px",
  },
  subtitle5: {
    fontWeight: 600,
    fontSize: 12,
    lineHeight: "15px",
  },

  button: {
    textTransform: "none" as const,
    fontSize: 18,
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },
  caption: {
    fontSize: 10,
    letterSpacing: "0.33px",
    lineHeight: "13px",
  },
  overline: {
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: "0.33px",
    lineHeight: "13px",
  },
};
