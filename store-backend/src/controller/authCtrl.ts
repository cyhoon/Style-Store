import { Context } from "koa";
import { signInValidation } from "../lib/validation/authValidation";
import { connection } from "../database/connection";
import User from "../database/model/User";

type SignInSchema = {
  userEmail: string;
  pw: string;
}

const signInCtrl = async (ctx: Context) => {
  const isValid = signInValidation(ctx.request.body);
  console.log('isValid: ', isValid);
  if (isValid.error) {
    ctx.status = 400;
    ctx.body = {
      name: 'WRONG_SCHEMA',
      description: '요청 파라미터 에러',
    };
    return;
  }

  // const { userEmail, pw }: SignInSchema = ctx.request.body;
  let userRepository = await connection.getRepository(User);
  console.log('userRepository: ', userRepository);
};

const signUpCtrl = (ctx: Context) => {
  ctx.status = 200;
  ctx.body = "signup";
};

export {
  signInCtrl,
  signUpCtrl,
};
