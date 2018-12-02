import axios from 'axios';

const LOCAL_URL = 'http://127.0.0.1:8080';

export const baseAxios = (() => {
  return axios.create({
    baseURL: LOCAL_URL,
    timeout: 1000,
  });
})();

export const authAxios = ((token) => {
  return axios.create({
    baseURL: LOCAL_URL,
    timeout: 1000,
    headers: {
      'stylestore-token': token,
    }
  });
})(localStorage.getItem('token'));
