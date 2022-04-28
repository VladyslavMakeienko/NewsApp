import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routing";

const HomePage = React.lazy(() => import("pages/home"));
const DetailsPage = React.lazy(() => import("pages/details"));
const Error = React.lazy(() => import("pages/error"));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
      <Route path={`${ROUTES.DETAILS}/:id/`} element={<DetailsPage />} />
      <Route path="*" element={<Error type={404} />} />
    </Routes>
  );
};
