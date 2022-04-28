import { all } from "redux-saga/effects";
import { rootNewsSaga } from "./news/newsSaga";

export function* rootSaga(): Generator {
  yield all([rootNewsSaga()]);
}
