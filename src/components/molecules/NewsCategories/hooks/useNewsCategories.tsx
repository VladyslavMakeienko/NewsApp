import { useDispatch } from "react-redux";
import { clearSearchInput, getNews } from "store/actions/news";

export const useNewsCategories = () => {
  const dispatch = useDispatch();

  const newsCategoryChangeHandler = (newsCategory: string) => {
    dispatch(getNews(newsCategory));
    dispatch(clearSearchInput());
  };

  return {
    newsCategoryChangeHandler,
  };
};
