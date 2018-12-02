import { authAxios } from '../axios';

export const requestGoods = async () => {
  try {
    const response = await authAxios.get('/api/goods');
    return response;
  } catch ({ response }) {
    return response;
  }
};
