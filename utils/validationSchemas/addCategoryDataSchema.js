const Joi = require('joi')
const { CATEGORY_TYPES, ERROR_MESSAGES } = require('../constants')

const categoryDataSchema = Joi.object({
  type: Joi.string()
    .required()
    .trim()
    .valid(CATEGORY_TYPES.INCOME, CATEGORY_TYPES.COST)
    .messages({
      'any.required': ERROR_MESSAGES.missingTypeField,
      'any.only': ERROR_MESSAGES.invalidTypeValue
    }),
  name: Joi.string()
    .required()
    .trim()
    .min(2)
    .messages({
      'any.required': ERROR_MESSAGES.missingNameField,
      'string.base': ERROR_MESSAGES.invalidNameValue,
      'string.min': ERROR_MESSAGES.invalidNameValue
    })
})

module.exports = categoryDataSchema
