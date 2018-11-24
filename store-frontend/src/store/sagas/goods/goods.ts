import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { requestGoods } from "src/lib/api/goods";
import { GET_GOODS, getGoodsFail, getGoodsSuccess } from "src/store/modules/goods";

export function* goods(): SagaIterator {
  const response = yield call(requestGoods);

  const { status, data: responseBodyData } = response;

  switch (status) {
    case 200:
      yield put (getGoodsSuccess(responseBodyData));
      break;
    default:
      console.log('알 수 없는 인증 에러');
      yield put(getGoodsFail(responseBodyData));
      break;
  }
};

export function* watchRequestGoods() {
  yield takeEvery(GET_GOODS, goods);
};
