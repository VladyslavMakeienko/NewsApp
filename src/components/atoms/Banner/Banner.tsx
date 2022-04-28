import * as React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useCommonStyles } from "styles/common";
import { HELP_UKRAINE } from "constants-app";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, #0057b7 50%, #ffd700 50%)",
    height: 50,
  },
}));

const textForBanner = "Russian warship, idi nahui!";

export const Banner = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" color="mainBlack">
        <a
          href={HELP_UKRAINE}
          target="_blank"
          className={commonClasses.linkDark}
          rel="noreferrer"
        >
          {textForBanner}
        </a>
      </Typography>
    </div>
  );
};
