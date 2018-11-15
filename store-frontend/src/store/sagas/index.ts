import { SagaIterator } from "redux-saga";
import { all, fork } from 'redux-saga/effects';
import { watchRequestLogin } from "./auth/auth";
// import authSaga from "./auth";

export default function* rootSaga(): SagaIterator {
  yield all([
    fork(watchRequestLogin),
  ]);
};
