import { useMemo } from "react";
import { useSelector } from "react-redux";
import { searchNewsByTitleSelector } from "store/selectors/news";
import { useFilteredNews } from "components/templates/HomePageTemplate/hooks";
import { useTransformedNews } from "hooks";
import { checkIsArray, checkIsString } from "utils";

export const useSetNews = () => {
  const searchNewsByTitle = useSelector(searchNewsByTitleSelector);

  const { isFilteredNews, filteredNews } = useFilteredNews();
  const { isTransformedNews, transformedNews } = useTransformedNews();

  const news = useMemo(() => {
    return isTransformedNews && !isFilteredNews
      ? transformedNews
      : filteredNews;
  }, [isTransformedNews, isFilteredNews, transformedNews, filteredNews]);

  const isNews = !!news && checkIsArray(news);
  const isSearchNewsByTitle = checkIsString(searchNewsByTitle);
  const isNotFoundNewsByTitle = !isFilteredNews && isSearchNewsByTitle;

  return {
    news,
    isNews,
    isNotFoundNewsByTitle,
  };
};
