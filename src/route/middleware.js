const Joi = require("joi");

const schemaReplace = Joi.object().keys({
  _id: Joi.string().optional(),
  "es-ES": Joi.object().optional(),
  "en-US": Joi.object().optional(),
  "pt-BR": Joi.object().optional(),
});

validateSchemaReplace = (dataValidate) => {
  const result = schemaReplace.validate(dataValidate);
  const { value, error } = result;
  const valid = error == null;
  return valid;
};

module.exports = validateSchemaReplace;
