import { useSelector } from "react-redux";
import { searchNewsByTitleSelector } from "store/selectors/news";
import { useTransformedNews } from "hooks";
import { setFilteredNews, checkIsArray, checkIsString } from "utils";

export const useFilteredNews = () => {
  const searchNewsByTitle = useSelector(searchNewsByTitleSelector);

  const { transformedNews } = useTransformedNews();

  const newsTitle =
    searchNewsByTitle && checkIsString(searchNewsByTitle)
      ? searchNewsByTitle
      : "";

  const filteredNews = setFilteredNews({
    news: transformedNews,
    newsTitle,
  });

  const isFilteredNews = checkIsArray(filteredNews);

  return { isFilteredNews, filteredNews };
};
