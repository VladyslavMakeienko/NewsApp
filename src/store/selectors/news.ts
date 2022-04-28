import { createSelector } from "reselect";
import { State } from "store/store";
import { NewsInformation, LoadResult, ErrorResult } from "types";

// Selectors

export const getNewsSelector = createSelector(
  [(state: State) => state.newsPage.news],
  (news: NewsInformation[]) => news
);

export const loadNewsSelector = createSelector(
  [(state: State) => state.newsPage.loading],
  (loading: LoadResult) => loading
);

export const searchNewsByTitleSelector = createSelector(
  [(state: State) => state.newsPage.searchNewsByTitle],
  (searchNewsByTitle) => searchNewsByTitle
);

export const errorNewsSelector = createSelector(
  [(state: State) => state.newsPage.error],
  (error: ErrorResult) => error
);

export const isClearSearchInputSelector = createSelector(
  [(state: State) => state.newsPage.isClearSearchInput],
  (isClearSearchInput: boolean) => isClearSearchInput
);
