import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';


// action type
export const LOGIN: string = 'auth/LOGIN';
export const LOGIN_SUCCESS: string = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAIL: string = 'auth/LOGIN_FAIL';

// action creator
export const loginRequest: any = createAction(LOGIN, (email: string, pw: string) => {
  return {
    email,
    pw,
  }
});
export const loginSuccess = createAction(LOGIN_SUCCESS, (token: string) => token);
export const loginFail = createAction(LOGIN_FAIL, (message: string) => message);

// initial state
const initialState = Map({
  pending: false,
  token: '',
});

// reducer
export default handleActions({
  [LOGIN]: (state: any, action) => {
    console.log('action: ', action);
    return state;
  },
  [LOGIN_SUCCESS]: (state: any, action) => {
    console.log('action: ', action);
    return state;
  },
  [LOGIN_FAIL]: (state: any, action) => {
    console.log('action: ', action);
    return state;
  },
}, initialState);
