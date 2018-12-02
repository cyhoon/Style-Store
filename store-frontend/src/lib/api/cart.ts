import { authAxios } from '../axios';

export const requestCartList = async () => {
  try {
    const response = await authAxios.get('/api/carts');
    return response;
  } catch ({ response }) {
    return response;
  }
}

export const requestCartCount = async () => {
  try {
    const response = await authAxios.get('/api/carts/count');
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

export const requestCartAdd = async (requestBody: CartAddRequestBody) => {
  try {
    const response = await authAxios.post('/api/carts', requestBody);
    return response;
  } catch ({ response }) {
    return response;
  }
};

export const requestCartRemove = async (cartId: number) => {
  try {
    const response = await authAxios.delete('/api/carts/' + cartId);
    return response;
  } catch ({ response }) {
    return response;
  }
};

interface CartQuantityChangeRequestBody {
  quantity: number;
}

export const requestCartQuantityChange = async (cartId: number, requestBody: CartQuantityChangeRequestBody) => {
  try {
    const response = await authAxios.put(`/api/carts/${cartId}/quantity`, requestBody);
    return response;
  } catch ({ response }) {
    return response;
  }
};
