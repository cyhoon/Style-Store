import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8080';

export const requestGoods = async () => {
  try {
    const response = await axios.get(baseUrl + '/api/goods');
    return response;
  } catch ({ response }) {
    return response;
  }
};
