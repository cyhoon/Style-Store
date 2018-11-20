import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { requestLogin, requestRegister } from "src/lib/api/auth";
import { LOGIN, loginFail, loginSuccess, REGISTER, registerFail, registerSuccess } from "src/store/modules/auth";

interface LoginBodyData {
  userEmail: string;
  pw: string;
};

interface RegisterBodyData {
  userEmail: string;
  pw: string;
  nickName: string;
}

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

export function* register({ payload: { userEmail, pw, nickName }}: any): SagaIterator {
  const bodyData: RegisterBodyData = { userEmail, pw, nickName };

  const response = yield call(requestRegister, bodyData);

  const { status, data: responseBodyData } = response;

  switch (status) {
    case 200:
      yield put(registerSuccess(responseBodyData));
      break;
    case 409: // auth error
      console.log("이메일 중복");
      yield put(registerFail(responseBodyData));
      break;
    default:
      console.log('알 수 없는 인증 에러');
      yield put(registerFail(responseBodyData));
      break;
  }
}

export function* watchRequestLogin() {
  yield takeEvery(LOGIN, login);
}

export function* watchRequestRegister() {
  yield takeEvery(REGISTER, register);
}
