import {
  GET_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR,
  GET_NEWS_RESET,
  SEARCH_NEWS_BY_TITLE,
  CLEAR_SEARCH_INPUT,
} from "./../constants/news";
import { ErrorResult, NewsInformation } from "types";

// Types for Actions

type GetNewsErrorAction = {
  type: typeof GET_NEWS_ERROR;
  payload: ErrorResult;
};

export type GetNewsAction = {
  type: typeof GET_NEWS;
  payload: string;
};

export type GetNewsSuccessAction = {
  type: typeof GET_NEWS_SUCCESS;
  payload: Array<NewsInformation>;
};

export type GetNewsResetAction = {
  type: typeof GET_NEWS_RESET;
};

export type SearchNewsByTitleAction = {
  type: typeof SEARCH_NEWS_BY_TITLE;
  payload: string;
};

export type ClearSearchInputAction = {
  type: typeof CLEAR_SEARCH_INPUT;
};

export type NewsActions =
  | GetNewsAction
  | GetNewsSuccessAction
  | GetNewsErrorAction
  | GetNewsResetAction
  | SearchNewsByTitleAction
  | ClearSearchInputAction;

// Actions

// Action for Get News

export const getNews = (payload: string): GetNewsAction => {
  return {
    type: GET_NEWS,
    payload,
  };
};

// Action for Succes Get News

export const getNewsSuccess = (
  payload: Array<NewsInformation>
): GetNewsSuccessAction => {
  return {
    type: GET_NEWS_SUCCESS,
    payload,
  };
};

// Action for Error Get News

export const getNewsError = (payload: ErrorResult): GetNewsErrorAction => {
  return {
    type: GET_NEWS_ERROR,
    payload,
  };
};

// Action for Reset Get News

export const getNewsReset = (): GetNewsResetAction => {
  return {
    type: GET_NEWS_RESET,
  };
};

// Action for search News By Title

export const searchNewsByTitle = (payload: string): SearchNewsByTitleAction => {
  return {
    type: SEARCH_NEWS_BY_TITLE,
    payload,
  };
};

// Action for clear search input

export const clearSearchInput = (): ClearSearchInputAction => {
  return {
    type: CLEAR_SEARCH_INPUT,
  };
};
