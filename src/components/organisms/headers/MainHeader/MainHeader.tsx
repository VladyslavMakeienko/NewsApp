import * as React from "react";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BasicHeader, MobileHeader } from "components/organisms/headers";

export const MainHeader = () => {
  const theme = useTheme();
  const MdDowm = useMediaQuery(theme.breakpoints.down("sm"));

  return !MdDowm ? <BasicHeader /> : <MobileHeader />;
};
