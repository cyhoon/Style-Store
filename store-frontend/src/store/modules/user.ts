import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";

// type definition
interface UserState {
  token: string;
  isLogin: boolean;
  user: {
    userEmail: string;
    nickName: string;
    gender: string;
    birthDay: string;
    photoSrc: string;
  };
}

// interface SaveUserAction {
//   payload: {
//     token: string;
//     user: {
//       userEmail: string;
//       nickName: string;
//       gender: string;
//       birthDay: string;
//       photoSrc: string;
//     };
//   };
// }

// action types
export const SAVE_USER: string = 'user/SAVE_USER';
export const USER_LOGOUT: string = 'user/USER_LOGOUT';

// action creators
export const saveUser = createAction(SAVE_USER);
export const userLogout = createAction(USER_LOGOUT);

const initialState: UserState = {
  token: '',
  isLogin: false,
  user: {
    userEmail: '',
    nickName: '',
    gender: '',
    birthDay: '',
    photoSrc: ''
  },
}

// reducer
export default handleActions({
  [SAVE_USER]: (state: UserState, action: any) => {
    const { token, user } = action.payload;
    return produce(state, (draft: UserState) => {
      draft.isLogin = true;
      draft.token = token;
      draft.user = user;
    });
  },
  [USER_LOGOUT]: (state: UserState, action) => {
    return produce(state, (draft) => {
      draft.isLogin = false;
      draft.token = '';
      draft.user = {
        userEmail: '',
        nickName: '',
        gender: '',
        birthDay: '',
        photoSrc: ''
      };
    });
  },
}, initialState);
