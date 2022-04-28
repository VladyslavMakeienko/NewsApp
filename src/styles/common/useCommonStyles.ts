import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";

export const useCommonStyles = makeStyles((theme: Theme) => ({
  // links
  linkBlue: {
    textDecoration: "none",
    color: theme.palette.mainColor,
    "&:hover": {
      color: theme.palette.lightBlue,
    },
    "&:active": {
      color: theme.palette.middleBlue,
    },
  },
  linkDark: {
    textDecoration: "none",
    color: theme.palette.mainBlack,
    "&:hover": {
      color: theme.palette.lightBlack,
    },
    "&:active": {
      color: theme.palette.middleBlack,
    },
  },
  // buttons
  buttonBlue: {
    background: theme.palette.mainColor,
    color: theme.palette.mainWhite,
    "&:hover": {
      background: theme.palette.lightBlue,
    },
    "&:active": {
      background: theme.palette.middleBlue,
    },
  },
  containerPage: {
    maxWidth: 1920,
    margin: "0 auto",
    padding: theme.spacing(4, 5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2),
    },
  },
  header: {
    padding: theme.spacing(2, 5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2),
    },
  },
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconSize: {
    height: 16,
    width: 24,
    [theme.breakpoints.down("md")]: {
      height: 14,
      width: 22,
    },
  },
}));
