import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8080';

export const requestCartCount = async (token: string) => {
  try {
    const response = await axios.get(baseUrl + '/api/carts/count', { headers: { 'stylestore-token': token } });
    return response;
  } catch ({ response }) {
    return response;
  }
};
