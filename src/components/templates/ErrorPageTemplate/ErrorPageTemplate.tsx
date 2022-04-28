import * as React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ROUTES } from "routes/routing";
import { useScrollToTop } from "hooks";
import { useCommonStyles } from "styles/common";
import { useIsErrorInformation } from "./hooks";
import { Props } from "./ErrorPageTemplate.d";

const useStyles = makeStyles((theme: Theme) => ({
  texts: {
    paddingBottom: theme.spacing(1),
    textAlign: "center",
  },
}));

const textForLink = "Go back to the main page";

export const ErrorPageTemplate = ({ errorInformation }: Props) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  const { header, label, description, homeRedirect } = errorInformation;

  const { isHeader, isLabel, isDescription, isHomeRedirect } =
    useIsErrorInformation({
      errorInformation,
      header,
      label,
      description,
      homeRedirect,
    });

  const refresh = () => {
    window.location.reload();
  };

  useScrollToTop();

  return (
    <div className={commonClasses.rootContainer}>
      {isHeader ? (
        <Typography variant="h1" color="mainColor" className={classes.texts}>
          {header}
        </Typography>
      ) : null}

      {isLabel ? (
        <Typography variant="h2" className={classes.texts}>
          {label}
        </Typography>
      ) : null}
      {isDescription ? (
        <Typography variant="h3" className={classes.texts}>
          {description}
        </Typography>
      ) : null}
      {isHomeRedirect ? (
        <Typography variant="h4">
          <Link
            to={ROUTES.ROOT}
            className={commonClasses.linkDark}
            onClick={refresh}
          >
            {textForLink}
          </Link>
        </Typography>
      ) : null}
    </div>
  );
};
