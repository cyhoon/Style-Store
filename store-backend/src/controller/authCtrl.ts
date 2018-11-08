import { Context } from "koa";
import { signInValidation, signUpValidation } from "../lib/validation/authValidation";
import User from "../database/model/User";
import { getManager, Repository } from "typeorm";
import { generateToken } from "../lib/token";
import { encryptPassword } from "../lib/encrypt";

const signInCtrl = async (ctx: Context) => {
  try {
    type BodySchema = {
      userEmail?: string;
      pw?: string;
    }
  
    const isValid = signInValidation(ctx.request.body);
  
    if (isValid.error) {
      ctx.status = 400;
      ctx.body = {
        name: 'WRONG_SCHEMA',
        description: '요청 파라미터 에러',
      };
      return;
    }
  
    const { userEmail, pw }: BodySchema = ctx.request.body;
  
    const userRepository:Repository<User> = getManager().getRepository(User);
    const user: User = await userRepository.findOne({
      select: ["userEmail", "nickName", "gender", "birthDay", "photoSrc"],
      where: {
        userEmail, pw: encryptPassword(pw)
      }
    });
  
    if (!user) {
      ctx.status = 401;
      ctx.body = {
        name: 'UNAUTHORIZED',
        description: '사용자 정보가 조회되지 않습니다.',
      };
      return;
    }
  
    const token = await generateToken({
      userEmail: user.userEmail,
      nickName: user.nickName
    });
  
    ctx.status = 200;
    ctx.body = {
      name: 'SUCCESS',
      description: '로그인 성공',
      data: {
        user,
        token,
      }
    };
  } catch (error) {
    console.error(`SERVER ERROR: ${error.message}`);
    ctx.status = 500;
    ctx.body = {
      name: 'SERVER_ERROR',
      description: '서버 에러'
    };
  }
};

const signUpCtrl = async (ctx: Context) => {
  try {
    type BodySchema = {
      userEmail?: string,
      pw?: string,
      nickName?: string,
    };
  
    const isValid = signUpValidation(ctx.request.body);
    if (isValid.error) {
      ctx.status = 400;
      ctx.body = {
        name: 'WRONG_SCHEMA',
        description: '요청 파라미터 에러',
      };
      return;
    }
  
    const { userEmail, pw, nickName }: BodySchema = ctx.request.body;
  
    const userRepository:Repository<User> = getManager().getRepository(User);
  
    const isExists = await userRepository.findOne({ where: { userEmail }});
    if (isExists) {
      ctx.status = 409;
      ctx.body = {
        name: 'DUPLICATED_ACCOUNT',
        payload: '이메일 중복',
      };
  
      return;
    }
  
    const userBuild:User = new User();
    userBuild.userEmail = userEmail;
    userBuild.pw = encryptPassword(pw);
    userBuild.nickName = nickName;
  
    const user = await userRepository.save(userBuild);
    delete user.pw;
  
    const token = await generateToken({
      userEmail: user.userEmail,
      nickName: user.nickName
    });
  
    ctx.status = 200;
    ctx.body = {
      name: 'SUCCESS',
      description: '회원가입 성공',
      data: {
        user,
        token
      }
    };
  } catch (error) {
    console.error(`SERVER ERROR: ${error.message}`);
    ctx.status = 500;
    ctx.body = {
      name: 'SERVER_ERROR',
      description: '서버 에러'
    };
  }
};

export {
  signInCtrl,
  signUpCtrl,
};
