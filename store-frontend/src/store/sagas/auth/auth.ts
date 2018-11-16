import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { requestLogin } from "src/lib/api/auth";
import { LOGIN, loginFail, loginSuccess } from "src/store/modules/auth";

interface LoginBodyData {
  userEmail: string;
  pw: string;
};

export function* login({ payload: { userEmail, pw } }: any): SagaIterator {
  const bodyData: LoginBodyData = { userEmail, pw };

  const response = yield call(requestLogin, bodyData);

  const { status, data: responseBodyData } = response;

  switch (status) { // network status
    case 200: // success
      yield put(loginSuccess(responseBodyData));
      break;
    case 401: // auth error
      console.log('사용자 정보 조회가 안됨');
      yield put(loginFail(responseBodyData));
      break;
    default: // default auth error
      console.log('알 수 없는 인증 에러');
      yield put(loginFail(responseBodyData));
      break;
  }
};

export function* watchRequestLogin() {
  yield takeEvery(LOGIN, login);
}
