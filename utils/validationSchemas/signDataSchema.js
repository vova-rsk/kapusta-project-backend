const Joi = require('joi')
const { ERROR_MESSAGES } = require('../constants')

const userSchema = Joi.object({
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .messages({
      'string.email': ERROR_MESSAGES.invalidEmailFormat,
      'any.required': ERROR_MESSAGES.missingField
    }),
  password: Joi.string()
    .required()
    .min(6)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .messages({
      'string.min': ERROR_MESSAGES.invalidPasswordFormat,
      'string.pattern.base': ERROR_MESSAGES.invalidPasswordFormat,
      'any.required': ERROR_MESSAGES.missingField
    }),
  avatarURL: Joi.string()
    .optional()
    .messages({
      'any.required': ERROR_MESSAGES.missingField
    }),
  token: Joi.string()
    .optional()
})

module.exports = userSchema
