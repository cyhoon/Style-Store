import * as Router from "koa-router";
import { getGoods, saveGoods } from "../controller/goodsCtrl";

const goodsRouter: Router = new Router();

goodsRouter.get('/', getGoods);
goodsRouter.post('/', saveGoods);

export default goodsRouter;
