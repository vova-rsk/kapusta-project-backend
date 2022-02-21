const Joi = require('joi')
const { ERROR_MESSAGES } = require('../constants')

const entryFeeDataSchema = Joi.object({
  value: Joi.number()
    .required()
    .positive()
    .precision(2)
    .min(0.01)
    .messages({
      'number.value': ERROR_MESSAGES.invalidEmailFormat,
      'any.required': ERROR_MESSAGES.missingField,
      'number.positive': ERROR_MESSAGES.invalidValue,
      'number.min': ERROR_MESSAGES.invalidValue,
      'number.integer': ERROR_MESSAGES.invalidValue
    })
})

module.exports = entryFeeDataSchema
