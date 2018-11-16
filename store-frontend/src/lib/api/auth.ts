import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8080';

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
    const response = await axios.post(baseUrl + '/api/auth/signin', bodyData);
    return response;
  } catch ({ response }) {
    return response;
  };
};

export const requestRegister = async (bodyData: RegisterBodyParam) => {
  try {
    const response = await axios.post(baseUrl + '/api/auth/signup', bodyData);
    return response;
  } catch ({ response }) {
    return response;
  }
};
