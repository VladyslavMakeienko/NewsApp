import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getNewsSelector } from "store/selectors/news";
import { transformNews, checkIsArray } from "utils";

export const useTransformedNews = () => {
  const news = useSelector(getNewsSelector);

  const transformedNews = useMemo(() => {
    return transformNews(news);
  }, [news]);

  const isTransformedNews = checkIsArray(transformedNews);

  return { transformedNews, isTransformedNews };
};
