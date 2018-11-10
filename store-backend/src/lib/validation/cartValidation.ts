import * as Joi from "joi";

export const saveCartValidation = (schema) => {
  const saveCartSchema = {
    goodsId: Joi.number().required(),
    optionsId: Joi.number().required(),
    quantity: Joi.number().required(),
  };

  const validate = Joi.validate(schema, saveCartSchema);
  return validate;
};
