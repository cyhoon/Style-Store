import { createAction, handleActions } from 'redux-actions';

import { produce } from 'immer';


// action type
export const LOGIN: string = 'auth/LOGIN';
export const LOGIN_SUCCESS: string = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAIL: string = 'auth/LOGIN_FAIL';

// action creator
export const loginRequest: any = createAction(LOGIN, (userEmail: string, pw: string) => {
  return {
    userEmail,
    pw,
  }
});
export const loginSuccess = createAction(LOGIN_SUCCESS, (token: string) => token);
export const loginFail = createAction(LOGIN_FAIL, (message: string) => message);

// initial state
const initialState = {
  pending: false,
  token: '',
  response: {
    status: '',
    message: ''
  },
};

// reducer
export default handleActions({
  [LOGIN]: (state: any, action) => {
    return produce(state, (draft) => {
      draft.pending = true;
    });
  },
  [LOGIN_SUCCESS]: (state: any, action: any) => {
    console.log('action token: ', action);
    return produce(state, (draft) => {
      draft.pending = false;
      draft.token = action.token;
    });
  },
  [LOGIN_FAIL]: (state: any, action) => {
    return produce(state, (draft) => {
      draft.pending = false;
      draft.response = {
        status: 'fail',
      }
    });
  },
}, initialState);
