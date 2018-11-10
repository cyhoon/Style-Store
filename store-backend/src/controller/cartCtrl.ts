import { Context } from "koa";
import { saveCartValidation } from "../lib/validation/cartValidation";
import { Repository, getManager } from "typeorm";
import Goods from "../database/model/Goods";
import Options from "../database/model/Options";
import Cart from "../database/model/Cart";
import User from "../database/model/User";

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

const getCarts = (ctx: Context) => {
  ctx.status = 200;
  ctx.body = 'getCarts';
};

const saveCart = async (ctx: AuthContext) => {
  ctx.status = 200;
  ctx.body = 'saveCart';
};

const removeCart = async (ctx: AuthContext) => {
  ctx.status = 200;
  ctx.body = 'removeCart';
};

const getCartCount = async (ctx: AuthContext) => {
  try {
    const { userEmail } = ctx.token;

    const cartRepository:Repository<Cart> = getManager().getRepository(Cart);
    const count = await cartRepository.count({ where: { user: userEmail }});

    ctx.status = 200;
    ctx.body = {
      name: 'SUCCESS',
      description: '장바구니 갯수 조회 성공',
      data: {
        count,
      },
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      name: 'SERVER_ERROR',
      description: '서버 에러'
    };
  }
};

export {
  getCarts,
  saveCart,
  removeCart,
  getCartCount,
};
