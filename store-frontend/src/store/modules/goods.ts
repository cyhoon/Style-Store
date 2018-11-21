import { createAction, handleActions } from "redux-actions";

// action type
export const GET_GOODS  = 'get/GOODS';
export const GET_GOODS_SUCCESS = 'get/GOODS_SUCCESS';
export const GET_GOODS_FAIL = 'get/GOODS_FAIL';

// action creator
export const getGoods: any = createAction(GET_GOODS);
export const getGoodsSuccess: any = createAction(GET_GOODS_SUCCESS);
export const getGoodsFail: any = createAction(GET_GOODS_FAIL);

// const initialState = {};

// reducer
export default handleActions({
  [GET_GOODS]: (state: any, action: any) => {
    console.log('action: ', action);
  },
  [GET_GOODS_SUCCESS]: (state: any, action: any) => {
    console.log('action: ', action);
  },
  [GET_GOODS_FAIL]: (state: any, action: any) => {
    console.log('action: ', action);
  }
}, null);
