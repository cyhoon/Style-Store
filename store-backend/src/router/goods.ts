import * as Router from "koa-router";
import { getGoods, getDetailGoods, saveGoods } from "../controller/goodsCtrl";

const goodsRouter: Router = new Router();

goodsRouter.get('/', getGoods);
goodsRouter.get('/:goodsId', getDetailGoods);
goodsRouter.post('/', saveGoods);

export default goodsRouter;
