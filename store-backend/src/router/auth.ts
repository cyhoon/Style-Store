import * as Router from "koa-router";
import { Context } from "koa";
import * as authCtrl from "../controller/authCtrl";

const authRouter: Router = new Router();

/**
 * @description
 * 1. 로그인 API
 * 2. 회원가입 API
 */
authRouter.post('/signin', authCtrl.signInCtrl);
authRouter.post('/signup', authCtrl.signUpCtrl);

export default authRouter;
