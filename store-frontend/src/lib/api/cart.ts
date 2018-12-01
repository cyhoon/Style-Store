import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8080';

export const requestCartList = async (token: string) => {
  try {
    const response = await axios.get(baseUrl + '/api/carts', { headers: { 'stylestore-token': token } });
    return response;
  } catch ({ response }) {
    return response;
  }
}

export const requestCartCount = async (token: string) => {
  try {
    const response = await axios.get(baseUrl + '/api/carts/count', { headers: { 'stylestore-token': token } });
    return response;
  } catch ({ response }) {
    return response;
  }
};

interface CartAddRequestBody {
  goodsId: number;
  optionsId: number;
  quantity: number;
}

export const requestCartAdd = async (token: string, requestBody: CartAddRequestBody) => {
  try {
    const response = await axios.post(baseUrl + '/api/carts', requestBody, { headers: { 'stylestore-token': token } });
    return response;
  } catch ({ response }) {
    return response;
  }
};

export const requestCartRemove = async (token: string, cartId: number) => {
  try {
    const response = await axios.delete(baseUrl + '/api/carts/' + cartId, { headers: { 'stylestore-token': token }});
    return response;
  } catch ({ response }) {
    return response;
  }
};
