import { SagaIterator } from "redux-saga";
import { all, fork } from 'redux-saga/effects';
import authSaga from "./auth";
import cartSaga from "./cart";
import goodsSaga from "./goods";

export default function* rootSaga(): SagaIterator {
  yield all([
    fork(authSaga),
    fork(cartSaga),
    fork(goodsSaga),
  ]);
};
