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
      subject: 'authToken',
    });
  } catch (error) {
    throw error;
  }
};

export const verifyToken = async (token: string) => {
  console.log('decode token');

  try {
    return await jwt.verify(token, secret);
  } catch (error) {
    throw error;
  }
};
