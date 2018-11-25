import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { requestCartAdd, requestCartCount } from "src/lib/api/cart";
import Storage from 'src/lib/storage';
import { ADD_CART, cartAddFail, cartAddSuccess, cartCountFail, cartCountSuccess, GET_CART_COUNT } from "src/store/modules/cart";

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
};

interface CartAddBodyData {
  goodsId: number;
  optionsId: number;
  quantity: number;
}

export function* cartAdd({ payload: { goodsId, optionsId } }: any): SagaIterator {
  const requestBodyData: CartAddBodyData = { goodsId, optionsId, quantity: 1 };
  const token = Storage.get('token');

  const response = yield call(requestCartAdd, token, requestBodyData);

  const { status, data: responseBodyData } = response;

  switch (status) {
    case 200:
      yield put(cartAddSuccess(responseBodyData));
      break;
    case 400:
      console.log('요청 파라미터 에러');
      yield put(cartAddFail(responseBodyData));
      break;
    case 406:
      console.log('상품이 존재하지 않을때');
      yield put(cartAddFail(responseBodyData));
      break;
    default:
      console.log('알 수 없는 인증 에러');
      yield put(cartAddFail(responseBodyData));
      break;
  }
}

export function* watchRequestCartCount() {
  yield takeEvery(GET_CART_COUNT, cartCount);
};

export function* watchRequestCartAdd() {
  yield takeEvery(ADD_CART, cartAdd);
};
