import React from "react";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
    subtitle3: true;
    subtitle4: true;
    subtitle5: true;
    subtitle6: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    mainColor: React.CSSProperties["color"];
    middleBlue: React.CSSProperties["color"];
    lightBlue: React.CSSProperties["color"];
    mainWhite: React.CSSProperties["color"];
    mainBlack: React.CSSProperties["color"];
    middleBlack: React.CSSProperties["color"];
    lightBlack: React.CSSProperties["color"];
    mainGray: React.CSSProperties["color"];
    lightGray: React.CSSProperties["color"];
    darkGray: React.CSSProperties["color"];
  }
}
