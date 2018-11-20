import { SagaIterator } from "redux-saga";
import { all, fork } from 'redux-saga/effects';
import { watchRequestLogin, watchRequestRegister } from "./auth";

export default function* authSaga(): SagaIterator {
  yield all([
    fork(watchRequestLogin),
    fork(watchRequestRegister)
  ]);
};
