import * as React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";
import clsx from "clsx";
import { BasicFooter } from "components/organisms/footers";
import { BackToTopButton } from "components/atoms/buttons";
import { useCommonStyles } from "styles/common";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "auto",
  },
  rootButton: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}));

export const MainFooter = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <div className={classes.root}>
      <div className={clsx(classes.rootButton, commonClasses.containerPage)}>
        <BackToTopButton />
      </div>
      <BasicFooter />
    </div>
  );
};
