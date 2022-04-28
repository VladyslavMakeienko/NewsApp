import * as React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ROUTES } from "routes/routing";
import { APP_NAME } from "constants-app";
import { useCommonStyles } from "styles/common";

export const LogoApp = () => {
  const commonClasses = useCommonStyles();

  return (
    <Typography variant="h2">
      <Link to={ROUTES.ROOT} className={commonClasses.linkBlue}>
        {APP_NAME}
      </Link>
    </Typography>
  );
};
