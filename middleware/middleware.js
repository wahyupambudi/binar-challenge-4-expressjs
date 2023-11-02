const { ResponseTemplate } = require("../helper/template.helper");
const Joi = require("joi");

function CheckPostUser(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().alphanum().max(255).required(),
    email: Joi.string().min(3).required(),
    password: Joi.string().alphanum().required(),
    identity_type: Joi.string().required(),
    identity_number: Joi.number().integer().required(),
    address: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  console.log(error);
  if (error) {
    let respErr = ResponseTemplate(
      null,
      "invalid request",
      error.details[0].message,
      400,
    );
    res.json(respErr);
    return;
  }

  next();
}

function CheckPostAccount(req, res, next) {
  const schema = Joi.object({
    bank_name: Joi.string().alphanum().max(255).required(),
    userId: Joi.number().required(),
    bank_account_number: Joi.number().required(),
    balance: Joi.number().required(),
  });

  const { error } = schema.validate(req.body);
  console.log(error);
  if (error) {
    let respErr = ResponseTemplate(
      null,
      "invalid request",
      error.details[0].message,
      400,
    );
    res.json(respErr);
    return;
  }

  next();
}

module.exports = {
  CheckPostUser,
  CheckPostAccount
};
