import * as Router from "koa-router";
import { getGoods, getDetailGoods, saveGoods } from "../controller/goodsCtrl";
import { checkToken } from "../middlewares/checkToken";

const goodsRouter: Router = new Router();

goodsRouter.get('/', getGoods);
goodsRouter.get('/:goodsId', getDetailGoods);
goodsRouter.post('/', checkToken, saveGoods);

export default goodsRouter;
