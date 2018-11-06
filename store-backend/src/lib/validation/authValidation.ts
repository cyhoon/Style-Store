import * as Joi from "joi";

const signInValidation = (schema) => {
  const signInSchema = {
    userEmail: Joi.string().email().required(),
    pw: Joi.string().required(),
  };

  const validate = Joi.validate(schema, signInSchema);
  return validate;
};

const signUpValidation = (schema) => {
  const signUpSchema = {
    userEmail: Joi.string().email().required(),
    pw: Joi.string().required(),
    nickName: Joi.string().required(),
  };

  const validate = Joi.validate(schema, signUpSchema);
  return validate;
};

export {
  signInValidation,
  signUpValidation,
};