import { Context } from "koa";

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

const getGoods = (ctx: AuthContext) => {
  ctx.status = 200;
  ctx.body = 'ok';
};

const saveGoods = (ctx: AuthContext) => {
  ctx.status = 200;
  ctx.body = 'ok';
};

export {
  getGoods,
  saveGoods,
}
