import { produce } from 'immer';
import { createAction, handleActions } from "redux-actions";

// type definition
interface CartState {
  cartCount: number;
};

interface CartCountSuccessAction {
  payload: {
    name: string;
    description: string;
    data: {
      count: number;
    };
  };
};

interface CartCountFailAction {
  payload: {
    name: string;
    description: string;
  };
};

// action type
export const GET_CART_COUNT: string = 'cart/GET_CART_COUNT';
export const GET_CART_COUNT_SUCCESS: string = 'cart/GET_CART_COUNT_SUCCESS';
export const GET_CART_COUNT_FAIL: string = 'GET_CART_COUNT_FAIL';

// action creator
export const cartCountRequest: any = createAction(GET_CART_COUNT);
export const cartCountSuccess = createAction(GET_CART_COUNT_SUCCESS);
export const cartCountFail = createAction(GET_CART_COUNT_FAIL);

const initialState: CartState = {
  cartCount: 0,
};

// reducer
export default handleActions({
  [GET_CART_COUNT]: (state: CartState, action: any) => {
    return produce(state, (draft: CartState) => {
      draft.cartCount = 0;
    });
  },
  [GET_CART_COUNT_SUCCESS]: (state: CartState, action: CartCountSuccessAction) => {
    const { data: { count } } = action.payload;
    return produce(state, (draft: CartState) => {
      draft.cartCount = count;
    });
  },
  [GET_CART_COUNT_FAIL]: (state: CartState, action: CartCountFailAction) => {
    return produce(state, (draft: CartState) => {
      draft.cartCount = 0;
    });
  }
}, initialState);
