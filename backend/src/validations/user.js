import Joi from "joi";
const email = Joi.string().email().required();
const username = Joi.string().alphanum().min(3).max(30).required();
const password = Joi.string().required();

export const signUp = Joi.object().keys({
  email,
  username,
  password,
});
export const signIn = Joi.object().keys({
  email,
  password,
});
