import * as Router from "koa-router";
import { Context } from "koa";
import authRouter from "./auth";
import { checkToken } from "../middlewares/checkToken";
import goodsRouter from "./goods";

const rootRouter: Router = new Router();

/** 인증 */
rootRouter.use('/auth', authRouter.routes());

/** 상품 조회 및 등록 */
rootRouter.use('/goods', checkToken, goodsRouter.routes());

rootRouter.get('/test', (ctx: Context): void => {
  ctx.status = 200;
  ctx.body = "success";
});

export default rootRouter;
