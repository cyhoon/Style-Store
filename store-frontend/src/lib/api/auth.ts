import { baseAxios } from '../axios';

interface LoginBodyParam {
  userEmail: string;
  pw: string;
};

interface RegisterBodyParam {
  userEmail: string;
  pw: string;
  nickName: string;
}

export const requestLogin = async (bodyData: LoginBodyParam) => {
  try {
    const response = await baseAxios.post('/api/auth/signin', bodyData);
    return response;
  } catch ({ response }) {
    return response;
  };
};

export const requestRegister = async (bodyData: RegisterBodyParam) => {
  try {
    const response = await baseAxios.post('/api/auth/signup', bodyData);
    return response;
  } catch ({ response }) {
    return response;
  }
};
