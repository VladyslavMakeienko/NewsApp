import { useLocation, useParams } from "react-router-dom";
import { isFalsyObjectKeys } from "utils";
import { useTransformedNews } from "hooks";
import { TransformedNewsInformation } from "types";
import { find } from "lodash";

type DetailedNews = TransformedNewsInformation;

export const useDetailedNews = () => {
  const params = useParams();
  const location = useLocation();

  const { transformedNews } = useTransformedNews();

  const detaildeNews = location.state as DetailedNews;
  const isDetailedNews = detaildeNews && !isFalsyObjectKeys(detaildeNews);

  const foundDetailedNews = find(
    transformedNews,
    (newsItem) => newsItem.id.toLowerCase() === params.id?.toLowerCase()
  );

  return {
    isDetailedNews,
    detaildeNews,
    foundDetailedNews,
  };
};
