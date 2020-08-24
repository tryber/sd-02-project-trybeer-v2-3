const Joi = require('@hapi/joi');

const schemaUser = Joi.object({
  name: Joi.string()
    .pattern(new RegExp(/^[a-z ]+$/i), 'name')
    .min(12)
    .required(),

  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .min(6)
    .pattern(new RegExp(/^[0-9]+$/), 'password')
    .required(),

  admin: Joi.boolean()
    .required(),
});

const schemaChangeName = Joi.object({
  name: Joi.string()
    .pattern(new RegExp(/^[a-z ]+$/i), 'name')
    .min(12)
    .required(),
  email: Joi.string()
    .email()
    .required(),
});

const objValidation = {
  user: schemaUser,
  change_name: schemaChangeName,
};

const validationFunc = (body, validationField) => {
  const { error } = objValidation[validationField].validate(body);
  if (error) {
    return { error: true, message: error.details[0].message };
  }
  return { error: false };
};

module.exports = {
  validationFunc,
};
