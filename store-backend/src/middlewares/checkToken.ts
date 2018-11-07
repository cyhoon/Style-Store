import { Context } from "koa";
import { verifyToken } from "../lib/token";

interface AuthContext extends Context {
  token?: {
    userEmail: string;
    nickName: string;
    iat: Date;
    exp: Date;
    iss: string;
    sub: string;
  }
};

export const checkToken = async (ctx: AuthContext, next) => {
  try {
    const token = ctx.headers['stylestore-token'];
    const decodeToken: any = await verifyToken(token);
    if (decodeToken.sub !== 'authToken') throw "Not a auth token";

    ctx.token = decodeToken;
    await next();
  } catch (error) {
    ctx.status = 401;
    ctx.body = {
      name: 'Unauthorized',
      description: '인증 실패',
    };
  }
};
