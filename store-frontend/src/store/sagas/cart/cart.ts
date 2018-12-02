import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";

import {
  requestCartAdd,
  requestCartCount,
  requestCartList,
  requestCartQuantityChange,
  requestCartRemove,
} from "src/lib/api/cart";

import {
  ADD_CART,
  cartAddFail,
  cartAddSuccess,
  cartChangeQuantityFail,
  cartChangeQuantitySuccess,
  cartCountFail,
  cartCountSuccess,
  cartListFail,
  cartListSuccess,
  cartRemoveFail,
  cartRemoveSuccess,
  CHANGE_CART_QUANTITY,
  GET_CART_COUNT,
  GET_CART_LIST,
  REMOVE_CART
} from "src/store/modules/cart";

export function* cartCount(): SagaIterator {
  const response = yield call(requestCartCount);

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
};

export function* cartAdd({ payload: { goodsId, optionsId, quantity } }: any): SagaIterator {
  const requestBodyData: CartAddBodyData = { goodsId, optionsId, quantity };

  const response = yield call(requestCartAdd, requestBodyData);

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
      console.log('알 수 없는 서버 에러');
      yield put(cartAddFail(responseBodyData));
      break;
  }
};

export function* cartList(): SagaIterator {
  const response = yield call(requestCartList);

  const { status, data: responseBodyData } = response;

  switch (status) {
    case 200:
      yield put(cartListSuccess(responseBodyData));
      break;
    default:
      console.log('알 수 없는 서버 에러');
      yield put(cartListFail(responseBodyData));
      break;
  }
};

export function* removeCart({ payload: { cartId } }: any): SagaIterator {
  const response = yield call(requestCartRemove, cartId);

  const { status, data: responseBodyData } = response;

  switch (status) {
    case 200:
      yield put(cartRemoveSuccess(responseBodyData));
      break;
    case 406:
      console.log('삭제할 장바구니 데이터가 존재하지 않습니다');
      yield put(cartRemoveFail(responseBodyData));
      break;
    default:
      console.log('알 수 없는 서버 에러');
      yield put(cartRemoveFail(responseBodyData));
      break;
  }
};

export function* changeCartQuantity({ payload: { cartId, quantity }}: any): SagaIterator {
  const response = yield call(requestCartQuantityChange, cartId, { quantity });

  const { status, data: responseBodyData } = response;

  switch (status) {
    case 200:
      yield put(cartChangeQuantitySuccess(responseBodyData));
      break;
    case 404:
      console.log('수정할 장바구니 데이터가 존재하지 않습니다');
      yield put(cartChangeQuantityFail(responseBodyData));
      break;
    default:
      console.log('알 수 없는 서버 에러');
      yield put(cartChangeQuantityFail(responseBodyData));
      break;
  }
}

export function* watchRequestCartCount() {
  yield takeEvery(GET_CART_COUNT, cartCount);
};

export function* watchRequestCartAdd() {
  yield takeEvery(ADD_CART, cartAdd);
};

export function* watchRequestCartList() {
  yield takeEvery(GET_CART_LIST, cartList);
};

export function* watchRequestCartRemove() {
  yield takeEvery(REMOVE_CART, removeCart);
};

export function* watchRequestCartQuantityChange() {
  yield takeEvery(CHANGE_CART_QUANTITY, changeCartQuantity);
};
