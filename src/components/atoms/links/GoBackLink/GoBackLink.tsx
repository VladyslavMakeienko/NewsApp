import * as React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { ROUTES } from "routes/routing";
import { useCommonStyles } from "styles/common";
import { checkIsString } from "utils";
import { Props } from "./GoBackLink.d";

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
  },
}));

const defaultLinkText = "Go back to the main page.";

export const GoBackLink = ({ customText }: Props) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  const isCustomText = checkIsString(customText);

  return (
    <Typography variant="body2">
      <Link
        to={ROUTES.ROOT}
        className={clsx(classes.link, commonClasses.linkDark)}
      >
        <ArrowBackIcon className={commonClasses.iconSize} />
        {isCustomText ? customText : defaultLinkText}
      </Link>
    </Typography>
  );
};
