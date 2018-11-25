import { produce } from 'immer';
import { createAction, handleActions } from "redux-actions";

// type definition
interface CartState {
  cartCount: number;
  addCart: {
    goodsId: number;
    status: string;
  }
};

interface CartSuccessAction {
  payload: {
    name: string;
    description: string;
    data: {
      count: number;
    };
  };
};

interface CartFailAction {
  payload: {
    name: string;
    description: string;
  };
};

// action type
export const GET_CART_COUNT: string = 'cart/GET_CART_COUNT';
export const GET_CART_COUNT_SUCCESS: string = 'cart/GET_CART_COUNT_SUCCESS';
export const GET_CART_COUNT_FAIL: string = 'GET_CART_COUNT_FAIL';

export const ADD_CART: string = 'cart/ADD_CART';
export const ADD_CART_SUCCESS: string = 'cart/ADD_CART_SUCCESS';
export const ADD_CART_FAIL: string = 'cart/ADD_CART_FAIL';

// action creator
export const cartCountRequest: any = createAction(GET_CART_COUNT);
export const cartCountSuccess = createAction(GET_CART_COUNT_SUCCESS);
export const cartCountFail = createAction(GET_CART_COUNT_FAIL);

export const cartAddRequest: any = createAction(ADD_CART);
export const cartAddSuccess = createAction(ADD_CART_SUCCESS);
export const cartAddFail = createAction(ADD_CART_FAIL);

const initialState: CartState = {
  cartCount: 0,
  addCart: {
    goodsId: 0, // 초기값
    status: 'INIT',
  },
};

// reducer
export default handleActions({
  [GET_CART_COUNT]: (state: CartState, action: any) => {
    return produce(state, (draft: CartState) => {
      draft.cartCount = 0;
    });
  },
  [GET_CART_COUNT_SUCCESS]: (state: CartState, action: CartSuccessAction) => {
    const { data: { count } } = action.payload;
    return produce(state, (draft: CartState) => {
      draft.cartCount = count;
    });
  },
  [GET_CART_COUNT_FAIL]: (state: CartState, action: CartFailAction) => {
    return produce(state, (draft: CartState) => {
      draft.cartCount = 0;
    });
  },
  [ADD_CART]: (state: CartState, action: any) => {
    const { goodsId } = action.payload;
    return produce(state, (draft: CartState) => {
      draft.addCart = {
        goodsId,
        status: 'INIT',
      };
    });
  },
  [ADD_CART_SUCCESS]: (state: CartState, action: CartSuccessAction) => {
    const { data: { count } } = action.payload;
    return produce(state, (draft: CartState) => {
      draft.cartCount = count;
      draft.addCart.status = 'SUCCESS';
    });
  },
  [ADD_CART_FAIL]: (state: CartState, action: CartFailAction) => {
    return produce(state, (draft: CartState) => {
      draft.addCart.status = 'FAIL';
    });
  }
}, initialState);
