import * as Router from "koa-router";
import { getCarts, saveCart, removeCart, getCartCount, changeCartQuantity } from "../controller/cartCtrl";

const cartRouter: Router = new Router();

cartRouter.get('/', getCarts);
cartRouter.post('/', saveCart);
cartRouter.put('/:cartId/quantity', changeCartQuantity);
cartRouter.delete('/:cartId', removeCart);
cartRouter.get('/count', getCartCount);

export default cartRouter;
