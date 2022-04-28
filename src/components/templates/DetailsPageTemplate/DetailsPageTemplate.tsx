import * as React from "react";
import { useSelector } from "react-redux";
import { loadNewsSelector } from "store/selectors/news";
import { DetailedInformationContainer } from "components/organisms/containers";
import { SuspenseLoader } from "components/atoms/loaders";

export const DetailsPageTemplate = () => {
  const loadingNews = useSelector(loadNewsSelector);

  return (
    <div>
      {loadingNews.loading ? (
        <SuspenseLoader />
      ) : (
        <DetailedInformationContainer />
      )}
    </div>
  );
};
