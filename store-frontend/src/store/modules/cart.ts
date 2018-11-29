import { produce } from 'immer';
import { createAction, handleActions } from "redux-actions";

interface CartObject {
  id: number;
  quantity: number;
  goods: {
    id: number;
    name: string;
    provider: string;
    price: number;
  },
  options: {
    id: number;
    color: string;
    size: string;
    stock: number;
  },
  shipping: {
    id: number;
    method: string;
    price: number;
    canBundle: boolean;
  }
}

type CartList = CartObject[];

// type definition
interface CartState {
  cartCount: number;
  addCart: {
    goodsId: number;
    status: string;
  },
  providerList: {
    status: string;
    data: CartList[];
  };
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

export const GET_CART_LIST: string = 'cart/GET_CART_LIST';
export const GET_CART_LIST_SUCCESS: string = 'cart/GET_CART_LIST_SUCCESS';
export const GET_CART_LIST_FAIL: string = 'cart/GET_CART_LIST_FAIL';

// action creator
export const cartCountRequest: any = createAction(GET_CART_COUNT);
export const cartCountSuccess = createAction(GET_CART_COUNT_SUCCESS);
export const cartCountFail = createAction(GET_CART_COUNT_FAIL);

export const cartAddRequest: any = createAction(ADD_CART);
export const cartAddSuccess = createAction(ADD_CART_SUCCESS);
export const cartAddFail = createAction(ADD_CART_FAIL);

export const cartListRequest: any = createAction(GET_CART_LIST);
export const cartListSuccess = createAction(GET_CART_LIST_SUCCESS);
export const cartListFail = createAction(GET_CART_LIST_FAIL);

const initialState: CartState = {
  cartCount: 0,
  addCart: {
    goodsId: 0, // 초기값
    status: 'INIT',
  },
  providerList: {
    status: 'INIT',
    data: [],
  }
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
  },
  [GET_CART_LIST]: (state: CartState, action: any) => {
    return produce(state, (draft: CartState) => {
      draft.providerList.status = 'INIT';
    });
  },
  [GET_CART_LIST_SUCCESS]: (state: CartState, action: any) => {
    const { data: { providerList } } = action.payload;
    return produce(state, (draft: CartState) => {
      draft.providerList = {
        status: 'SUCCESS',
        data: providerList,
      };
    });
  },
  [GET_CART_LIST_FAIL]: (state: CartState, action: any) => {
    return produce(state, (draft: CartState) => {
      draft.providerList.status = 'FAIL';
    });
  }
}, initialState);
