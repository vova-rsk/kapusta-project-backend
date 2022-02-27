const Joi = require('joi')
const { TRANSACTION_TYPES, ERROR_MESSAGES } = require('../constants')

const addTransactionDataSchema = Joi.object({
  type: Joi.string()
    .required()
    .trim()
    .valid(TRANSACTION_TYPES.DEBIT, TRANSACTION_TYPES.CREDIT)
    .messages({
      'any.required': ERROR_MESSAGES.missingTypeField,
      'any.only': ERROR_MESSAGES.invalidTypeValue
    }),
  date: Joi.date()
    .iso()
    .required()
    // .max(new Date().toISOString())
    .messages({
      'any.required': ERROR_MESSAGES.missingDateField,
      'date.format': ERROR_MESSAGES.invalidDateFormat,
      'date.max': ERROR_MESSAGES.invalidDateValue
    }),
  description: Joi.string()
    .required()
    .trim()
    // .pattern(/^[a-zA-Zа-яА-Я_\s][a-zA-Zа-яА-Я0-9]{1,20}$/)
    .messages({
      'any.required': ERROR_MESSAGES.missingDescriptionField,
      'string.pattern.base': ERROR_MESSAGES.invalidDescriptionValue
    }),
  category: Joi.string()
    .required()
    .trim()
    .pattern(/^[a-f0-9]{24}$/)
    .messages({
      'any.required': ERROR_MESSAGES.missingCategoryField,
      'string.pattern.base': ERROR_MESSAGES.invalidCategoryValue
    }),
  amount: Joi.number()
    .required()
    .positive()
    .messages({
      'any.required': ERROR_MESSAGES.missingAmountField,
      'number.base': ERROR_MESSAGES.invalidAmountValue,
      'number.positive': ERROR_MESSAGES.invalidAmountValue
    })
})

module.exports = addTransactionDataSchema
