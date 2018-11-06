import * as Router from "koa-router";
import { Context } from "koa";
import authRouter from "./auth";

const rootRouter: Router = new Router();

rootRouter.use('/auth', authRouter.routes());

rootRouter.get('/test', (ctx: Context): void => {
  ctx.status = 200;
  ctx.body = "success";
});

export default rootRouter;
