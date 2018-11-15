import axios from 'axios';

const baseUrl = 'localhost:8080';

interface LoginBodyParam {
  email: string;
  password: string;
};

interface RegisterBodyParam {
  email: string;
  password: string;
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
