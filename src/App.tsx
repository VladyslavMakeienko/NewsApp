import * as React from "react";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNews, getNewsReset } from "store/actions/news";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";
import Helmet from "react-helmet";
import favicon from "assets/icons/favicon/favicon.png";
import AppRoutes from "routes";
import { useFirstRender } from "hooks";
import ErrorBoundary from "components/organisms/ErrorBoundary";
import { MainHeader } from "components/organisms/headers";
import { SuspenseLoader } from "components/atoms/loaders";
import { MainFooter } from "components/organisms/footers";
import { Banner } from "components/atoms/Banner";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
}));

export const App = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const firstRender = useFirstRender();

  useEffect(() => {
    if (firstRender) {
      dispatch(getNews("sport"));
    }

    return () => {
      dispatch(getNewsReset());
    };
  }, [firstRender]);

  return (
    <div className={classes.root}>
      <Suspense fallback={<SuspenseLoader />}>
        <Helmet>
          <title>NewsApp</title>
          <link rel="icon" type="image/x-icon" href={favicon} sizes="16x16" />
        </Helmet>
        <ErrorBoundary>
          <Banner />
          <MainHeader />
        </ErrorBoundary>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
        <ErrorBoundary>
          <MainFooter />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};
