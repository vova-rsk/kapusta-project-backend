const createError = require('http-errors')

const validation = schema => {
  return async (req, res, next) => {
    const validated = schema.validate(req.body)

    if (validated.error) throw createError(400, validated.error.message)

    req.body = validated.value
    next()
  }
}

module.exports = validation
