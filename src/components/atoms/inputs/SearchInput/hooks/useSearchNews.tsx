import * as React from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { searchNewsByTitle } from "store/actions/news";
import { debounce } from "lodash";

export const useSearchNews = () => {
  const dispatch = useDispatch();

  const handleSearch = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    dispatch(searchNewsByTitle(event.target.value));
  };

  const searchNewsChangeHandler = useCallback(
    debounce((newsTitle) => handleSearch(newsTitle), 700),
    []
  );

  return { searchNewsChangeHandler };
};
