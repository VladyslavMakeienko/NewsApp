// main color (blue)
const mainColor = "#155fa0";
const middleBlue = "#1e88e5";
const lightBlue = "#4b9fea";
// white color
const mainWhite = "#FFFFFF";
// black color
const mainBlack = "#0f0f14";
const middleBlack = "#16161D";
const lightBlack = "#4A4D52";
// gray color
const mainGray = "#718096";
const lightGray = "#E8E8E8";
const darkGray = "#777777";
// error color
const errorText = "#FC010C";

export const palette = {
  mainWhite,
  mainBlack,
  middleBlack,
  lightBlack,
  mainGray,
  lightGray,
  darkGray,
  mainColor,
  middleBlue,
  lightBlue,
  errorText,

  primary: {
    main: mainWhite,
    light: mainWhite,
    dark: middleBlack,
  },
  secondary: {
    main: middleBlue,
    light: lightGray,
    dark: darkGray,
  },
  text: {
    primary: mainBlack,
    secondary: mainWhite,
  },
  error: {
    main: errorText,
  },
  action: {
    disabled: mainGray,
  },
};
