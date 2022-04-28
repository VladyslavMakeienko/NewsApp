import * as React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(5, 0),
  },
}));

export const SuspenseLoader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
};
