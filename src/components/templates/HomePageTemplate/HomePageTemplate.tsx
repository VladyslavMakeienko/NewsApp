import * as React from "react";
import { useSelector } from "react-redux";
import { loadNewsSelector } from "store/selectors/news";
import { SuspenseLoader } from "components/atoms/loaders";
import { NewsContainer } from "components/organisms/containers";
import { useScrollToTop } from "hooks";

export const HomePageTemplate = () => {
  const loadingNews = useSelector(loadNewsSelector);

  useScrollToTop();

  return (
    <div>{loadingNews.loading ? <SuspenseLoader /> : <NewsContainer />}</div>
  );
};
