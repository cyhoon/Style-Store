import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";

// type definition
interface GoodsOptions {
  id: number;
  color: string;
  size: string;
  stock: number;
}

interface GoodsItem {
  id: number;
  name: string;
  provider: string;
  price: number;
  options: GoodsOptions[];
  shipping: {
    id: number;
    method: string;
    price: number;
    canBundle: boolean;
  }
}

interface GoodsState {
  goods: GoodsItem[];
}

interface GoodsSuccessAction {
  payload: {
    name: string;
    description: string;
    data: {
      goods: GoodsItem[];
    }
  }
}

// action type
export const GET_GOODS: string  = 'get/GOODS';
export const GET_GOODS_SUCCESS: string = 'get/GOODS_SUCCESS';
export const GET_GOODS_FAIL: string = 'get/GOODS_FAIL';

// action creator
export const getGoods: any = createAction(GET_GOODS);
export const getGoodsSuccess = createAction(GET_GOODS_SUCCESS);
export const getGoodsFail = createAction(GET_GOODS_FAIL);

const initialState: GoodsState = {
  goods: [],
};

// reducer
export default handleActions({
  [GET_GOODS]: (state: any, action: any) => {
    return state;
  },
  [GET_GOODS_SUCCESS]: (state: GoodsState, action: GoodsSuccessAction) => {
    const { data: { goods } } = action.payload;

    return produce(state, (draft: GoodsState) => {
      draft.goods = goods;
    });
  },
  [GET_GOODS_FAIL]: (state: any, action: any) => {
    return state;
  }
}, initialState);
