import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { getNewsByCategory } from "services/api/newsAPI";
import {
  getNewsSuccess,
  getNewsError,
  GetNewsAction,
} from "store/actions/news";
import { GET_NEWS } from "store/constants/news";
import { News } from "types";

// Workers

// Worker for Get News data
function* getNews(action: GetNewsAction) {
  try {
    const news: News = yield call(getNewsByCategory, action.payload);
    if (news.status.toLowerCase() !== "ok") {
      const statusCode: number = 400;
      const message: string = news.status || "You have connection problems.";
      const result = {
        statusCode: statusCode,
        message: message,
      };
      console.error(message);
      yield put(getNewsError(result));
    }
    yield put(getNewsSuccess(news.articles));
  } catch (error: any) {
    console.error(error.message);
    const statusCode: number = error.response.status;
    const message: string =
      error.response.data.message || "You have connection problems.";
    const result = {
      statusCode: statusCode,
      message: message,
    };
    yield put(getNewsError(result));
  }
}

// Watchers

// Watcher for Get News data
function* getNewsWatcher(): Generator {
  yield takeLatest(GET_NEWS, getNews);
}

// root news Watchers
export function* rootNewsSaga(): Generator {
  yield all([fork(getNewsWatcher)]);
}
