import * as React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";
import Stack from "@mui/material/Stack";
import { LogoApp } from "components/atoms/Logo";
import { Copyright } from "components/atoms/Copyright";
import { Author } from "components/atoms/Author";
import { useCommonStyles } from "styles/common";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderTop: `1px solid ${theme.palette.lightGray}`,
  },
}));

export const BasicFooter = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <div className={classes.root}>
      <footer>
        <div className={commonClasses.containerPage}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "center", md: "baseline" }}
            spacing={{ xs: 2, md: 0 }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 3 }}
              alignItems={{ xs: "center", sm: "baseline" }}
            >
              <LogoApp />
              <Copyright />
            </Stack>
            <Author />
          </Stack>
        </div>
      </footer>
    </div>
  );
};
