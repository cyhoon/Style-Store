import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { requestCartCount } from "src/lib/api/cart";
import Storage from 'src/lib/storage';
import { cartCountFail, cartCountSuccess, GET_CART_COUNT } from "src/store/modules/cart";

export function* cartCount(): SagaIterator {
  const token = Storage.get('token');

  const response = yield call(requestCartCount, token);

  const { status, data: responseBodyData } = response;

  switch (status) { // network status
    case 200: // success
      yield put(cartCountSuccess(responseBodyData));
      break;
    default:
      console.log('알 수 없는 인증 에러');
      yield put(cartCountFail(responseBodyData));
      break;
  }
}

export function* watchRequestCartCount() {
  yield takeEvery(GET_CART_COUNT, cartCount);
};
