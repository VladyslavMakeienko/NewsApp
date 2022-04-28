import * as React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";
import { useCommonStyles } from "styles/common";
import { Props } from "./WrapperPage.d";

const useStyles = makeStyles((theme: Theme) => ({
  rootPage: {
    position: "relative",
    marginBottom: 215,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(10),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6.25),
    },
  },
}));

export const WrapperPage = ({ children }: Props) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <div className={classes.rootPage}>
      <div className={commonClasses.containerPage}>{children}</div>
    </div>
  );
};
