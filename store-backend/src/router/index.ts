import * as Router from "koa-router";
import { Context } from "koa";
import authRouter from "./auth";
import { checkToken } from "../middlewares/checkToken";
import goodsRouter from "./goods";
import cartRouter from "./cart";

const rootRouter: Router = new Router();

/** 인증 */
rootRouter.use('/auth', authRouter.routes());

/** 상품 조회 및 등록 */
rootRouter.use('/goods', checkToken, goodsRouter.routes());

/** 장바구니 */
rootRouter.use('/carts', checkToken, cartRouter.routes());

rootRouter.get('/test', (ctx: Context): void => {
  ctx.status = 200;
  ctx.body = "success";
});

export default rootRouter;
