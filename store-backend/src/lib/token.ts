import * as jwt from 'jsonwebtoken';

const { SECRET_KEY: secret } = process.env;

type PayloadType = {
  userEmail: string,
  nickName: string
}

export const generateToken = async (payload: PayloadType) => {
  console.log('generate token');

  try {
    return await jwt.sign(payload, secret, {
      issuer: 'stylestore.io',
      expiresIn: '7d',
    });
  } catch (error) {
    throw error;
  }
};

export const decodeToken = async (token) => {
  console.log('decode token');

  try {
    return await jwt.verify(token, secret);
  } catch (error) {
    throw error;
  }
};
