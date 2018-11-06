import * as crypto from "crypto";

const {
  ENCRYPT_KEY
} = process.env;

export const encryptPassword = (plainText: string): string => {
  const hash = crypto.createHmac('sha512', ENCRYPT_KEY)
    .update(plainText)
    .digest('hex');

  return hash;
};
