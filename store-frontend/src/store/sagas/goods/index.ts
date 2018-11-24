import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { watchRequestGoods } from "./goods";

export default function* goodsSaga(): SagaIterator {
  yield all([
    fork(watchRequestGoods)
  ]);
};
