import {
  GET_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR,
  GET_NEWS_RESET,
  SEARCH_NEWS_BY_TITLE,
  CLEAR_SEARCH_INPUT,
} from "./../constants/news";
import { NewsActions } from "./../actions/news";
import { NewsInformation, LoadResult, ErrorResult } from "types";
import { loadResultInitialState, errorInitialState } from "constants-app";

export type NewsReducerState = {
  news: Array<NewsInformation>;
  searchNewsByTitle: string | null;
  loading: LoadResult;
  error: ErrorResult;
  isClearSearchInput: boolean;
};

const initialState: NewsReducerState = {
  news: [],
  searchNewsByTitle: null,
  loading: loadResultInitialState,
  error: errorInitialState,
  isClearSearchInput: false,
};

type Actions = NewsActions;

export const newsReducer = (
  state = initialState,
  action: Actions
): NewsReducerState => {
  switch (action.type) {
    case GET_NEWS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          tried: true,
          loading: true,
        },
      };
    }
    case GET_NEWS_SUCCESS: {
      return {
        ...state,
        news: action.payload,
        isClearSearchInput: false,
        loading: {
          ...state.loading,
          loading: false,
          loaded: true,
        },
      };
    }
    case GET_NEWS_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: {
          ...state.loading,
          loading: false,
          loaded: false,
        },
      };
    }
    case GET_NEWS_RESET: {
      return {
        ...state,
        news: [],
        searchNewsByTitle: null,
      };
    }
    case SEARCH_NEWS_BY_TITLE: {
      return {
        ...state,
        searchNewsByTitle: action.payload,
      };
    }
    case CLEAR_SEARCH_INPUT: {
      return {
        ...state,
        isClearSearchInput: true,
        searchNewsByTitle: null,
      };
    }
    default:
      return state;
  }
};
