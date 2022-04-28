import * as React from "react";
import { DetailedNewsCard } from "components/atoms/cards";
import { ErrorNotification } from "components/atoms/notifications";
import { isFalsyObjectKeys } from "utils";
import { useDetailedNews } from "./hooks";

export const DetailedInformationContainer = () => {
  const { isDetailedNews, detaildeNews, foundDetailedNews } = useDetailedNews();

  const isFoundDetailedNews =
    !!foundDetailedNews && !isFalsyObjectKeys(foundDetailedNews);

  return isDetailedNews ? (
    <DetailedNewsCard detailedInformation={detaildeNews} />
  ) : !isDetailedNews && isFoundDetailedNews ? (
    <DetailedNewsCard detailedInformation={foundDetailedNews} />
  ) : (
    <ErrorNotification />
  );
};
