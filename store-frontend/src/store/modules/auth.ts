import { produce } from 'immer';
import { createAction, handleActions } from 'redux-actions';


// action type
export const LOGIN: string = 'auth/LOGIN';
export const LOGIN_SUCCESS: string = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAIL: string = 'auth/LOGIN_FAIL';

export const REGISTER: string = 'auth/REGISTER';
export const REGISTER_SUCCESS: string = 'auth/REGISTER_SUCCESS';
export const REGISTER_FAIL: string = 'auth/REGISTER_FAIL';


// action creator
export const loginRequest: any = createAction(LOGIN, (userEmail: string, pw: string) => {
  return {
    userEmail,
    pw,
  }
});
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFail = createAction(LOGIN_FAIL);

export const registerRequest: any = createAction(REGISTER, (userEmail: string, pw: string, nickName: string) => {
  return {
    userEmail,
    pw,
    nickName
  }
});
export const registerSuccess = createAction(REGISTER_SUCCESS);
export const registerFail = createAction(REGISTER_FAIL);

interface AuthState {
  pending: boolean;
  response: {
    status: string;
    description: string;
    user: {
      userEmail: string;
      nickName: string;
      gender: string;
      birthDay: string;
      photoSrc: string;
    },
    token: string;
  },
};

interface AuthLoginSuccessAction {
  payload: {
    description: string;
    data: {
      user: {
        userEmail: string;
        nickName: string;
        gender: string;
        birthDay: string;
        photoSrc: string;
      };
      token: string;
    };
  };
};

interface AuthLoginFailAction {
  payload: {
    description: string;
  };
};

interface AuthRegisterSuccessAction {
  payload: {
    description: string;
    data: {
      user: {
        userEmail: string;
        nickName: string;
        gender: string;
        birthDay: string;
        photoSrc: string;
      };
      token: string;
    };
  };
};

interface AuthRegisterFailAction {
  payload: {
    description: string;
  };
};

const initialState: AuthState = {
  pending: false,
  response: {
    status: '',
    description: '',
    user: {
      userEmail: '',
      nickName: '',
      gender: '',
      birthDay: '',
      photoSrc: '',
    },
    token: '',
  },
};

// reducer
export default handleActions({
  [LOGIN]: (state: AuthState, action: any) => {
    return produce(state, (draft) => {
      draft.pending = true;
      draft.response = {
        status: '',
        description: '',
        user: {
          userEmail: '',
          nickName: '',
          gender: '',
          birthDay: '',
          photoSrc: '',
        },
        token: '',
      }
    });
  },
  [LOGIN_SUCCESS]: (state: AuthState, action: AuthLoginSuccessAction) => {
    const { description, data: { user, token } } = action.payload;

    return produce(state, (draft: AuthState) => {
      draft.pending = false;
      draft.response = {
        status: 'success',
        description,
        user: {
          userEmail: user.userEmail,
          nickName: user.nickName,
          gender: user.gender,
          birthDay: user.birthDay,
          photoSrc: user.photoSrc
        },
        token
      };
    });
  },
  [LOGIN_FAIL]: (state: AuthState, action: AuthLoginFailAction) => {
    const { description } = action.payload;

    return produce(state, (draft: any) => {
      draft.pending = false;
      draft.response = {
        status: 'fail',
        description
      }
    });
  },
  [REGISTER]: (state: AuthState, action: any) => {
    return produce(state, (draft) => {
      draft.pending = true;
      draft.response = {
        status: '',
        description: '',
        user: {
          userEmail: '',
          nickName: '',
          gender: '',
          birthDay: '',
          photoSrc: '',
        },
        token: '',
      }
    });
  },
  [REGISTER_SUCCESS]: (state: AuthState, action: AuthRegisterSuccessAction) => {
    const { description, data: { user, token }} = action.payload;

    return produce(state, (draft: AuthState) => {
      draft.pending = false;
      draft.response = {
        status: 'success',
        description,
        user: {
          userEmail: user.userEmail,
          nickName: user.nickName,
          gender: user.gender,
          birthDay: user.birthDay,
          photoSrc: user.photoSrc
        },
        token
      }
    });
  },
  [REGISTER_FAIL]: (state: AuthState, action: AuthRegisterFailAction) => {
    const { description } = action.payload;

    return produce(state, (draft: any) => {
      draft.pending = false;
      draft.response = {
        status: 'fail',
        description
      }
    });
  },
}, initialState);
