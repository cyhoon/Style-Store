import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { watchRequestCartAdd, watchRequestCartCount, watchRequestCartList } from "./cart";

export default function* cartSaga(): SagaIterator {
  yield all([
    fork(watchRequestCartCount),
    fork(watchRequestCartAdd),
    fork(watchRequestCartList),
  ]);
};
