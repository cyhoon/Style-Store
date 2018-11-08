import * as Joi from "joi";

export const saveGoodsValidation = (schema) => {
  const optionsSchema = Joi.object({
    id: Joi.number().required(),
    color: Joi.string().required(),
    size: Joi.string().required(),
    stock: Joi.number().required()
  });

  const saveGoodsSchema = Joi.object({
    name: Joi.string().required(),
    provider: Joi.string().required(),
    price: Joi.number().required(),
    options: Joi.array().items(optionsSchema),
    shipping: Joi.object({
      method: Joi.string().required(),
      price: Joi.number().required(),
      canBundle: Joi.boolean().required(),
    }).required(),
  })

  const goodsListSchema = {
    goods: Joi.array().items(saveGoodsSchema).required(),
  };

  const validate = Joi.validate(schema, goodsListSchema);
  return validate;
}
