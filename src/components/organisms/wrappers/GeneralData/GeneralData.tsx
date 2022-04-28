import * as React from "react";
import { useSelector } from "react-redux";
import { errorNewsSelector, loadNewsSelector } from "store/selectors/news";
import ErrorPage from "pages/error";
import { SuspenseLoader } from "components/atoms/loaders";
import { ERROR_TYPES } from "constants-app";
import { Props } from "./GeneralData.d";

export const GeneralData = ({ children }: Props) => {
  const error = useSelector(errorNewsSelector);
  const loading = useSelector(loadNewsSelector);

  if (!loading.loaded && !error) {
    return <SuspenseLoader />;
  }

  if (error && error.statusCode) {
    return error.statusCode === 404 ? (
      <ErrorPage type={ERROR_TYPES.NOT_FOUND} />
    ) : (
      <ErrorPage type={error.statusCode} />
    );
  }

  return children;
};
