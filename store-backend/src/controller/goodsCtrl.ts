import { Context } from "koa";
import { saveGoodsValidation } from "../lib/validation/goodsValidation";
import { Repository, getManager } from "typeorm";
import Goods from "../database/model/Goods";
import Options from "../database/model/Options";
import Shipping from "../database/model/Shipping";

interface AuthContext extends Context {
  token?: {
    userEmail: string;
    nickName: string;
    iat: Date;
    exp: Date;
    iss: string;
    sub: string;
  }
};

const getGoods = async (ctx: AuthContext) => {
  try {
    const goodsRepository:Repository<Goods> = getManager().getRepository(Goods);
    const goods: Array<Goods> = await goodsRepository.find({ relations: ["options", "shipping"] });

    ctx.status = 200;
    ctx.body = {
      name: 'SUCCESS',
      description: '상품 목록 조회 성공',
      data: {
        goods,
      },
    };
  } catch (error) {
    console.error(`SERVER ERROR: ${error.message}`);
    ctx.status = 500;
    ctx.body = {
      name: 'SERVER_ERROR',
      description: '서버 에러'
    }
  }
};

const getDetailGoods = async (ctx: AuthContext) => {
  try {
    const { goodsId } = ctx.params;

    const goodsRepository:Repository<Goods> = getManager().getRepository(Goods);
    const goods = await goodsRepository.findOne({
      relations: ["options", "shipping"],
      where: { id: goodsId }
    });

    if (!goods) {
      ctx.status = 404;
      ctx.body = {
        name: 'NOT_FOUND_GOODS',
        description: '상품을 찾을 수 없습니다',
      };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      name: 'SUCCESS',
      description: '상품 상세보기 완료',
      data: {
        goods,
      },
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

const saveGoods = async (ctx: AuthContext) => {
  try {
    // 1. valid check
    type OptionsSchema = {
      id?: number;
      color?: string;
      size?: string;
      stock?: number;
    };

    type GoodsSchema = {
      name: string;
      provider: string;
      price: number;
      options: Array<OptionsSchema>;
      shipping: {
        method: string;
        price: number;
        canBundle: boolean;
      }
    }

    type BodySchema = {
      goods?: Array<GoodsSchema>;
    }

    const isValid = saveGoodsValidation(ctx.request.body);
    if (isValid.error) {
      ctx.status = 400;
      ctx.body = {
        name: 'WRONG_SCHEMA',
        description: '요청 파라미터 에러'
      };
    }

    const { goods }: BodySchema = ctx.request.body;

    const goodsRepository:Repository<Goods> = getManager().getRepository(Goods);
    const optionsRepository:Repository<Options> = getManager().getRepository(Options);
    const shippingRepository:Repository<Shipping> = getManager().getRepository(Shipping);

    // 2. insert data
    await Promise.all(goods.map(async (good: GoodsSchema) => {
      const { name, provider, price, options, shipping } = good;

      const goodsBuild: Goods = new Goods();
      goodsBuild.name = name;
      goodsBuild.provider = provider;
      goodsBuild.price = price;

      const goods = await goodsRepository.save(goodsBuild);

      const shippingBuild: Shipping = new Shipping();
      shippingBuild.method = shipping.method;
      shippingBuild.price = shipping.price;
      shippingBuild.canBundle = shipping.canBundle;
      shippingBuild.goodsId = goods;

      await shippingRepository.save(shippingBuild);

      await Promise.all(options.map(async (option: OptionsSchema, idx: number = 1) => {
        const { color, size, stock } = option;

        const optionsModel = new Options();
        optionsModel.id = goods.id * 1000 + idx + 1;
        optionsModel.color = color;
        optionsModel.size = size;
        optionsModel.stock = stock;
        optionsModel.goodsId = goods;

        await optionsRepository.save(optionsModel);
      }));
    }));

    ctx.status = 200;
    ctx.body = goods;
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
  getGoods,
  getDetailGoods,
  saveGoods,
}
