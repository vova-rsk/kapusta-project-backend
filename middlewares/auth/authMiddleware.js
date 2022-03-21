const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const { User } = require('../../models')
const { constants: { ERROR_MESSAGES } } = require('../../utils')

const SECRET_KEY = process.env.SECRET

const auth = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    throw createError(401, ERROR_MESSAGES.notAuthorized)
  }

  const token = authorization.split(' ')[1]
  const result = jwt.verify(token, SECRET_KEY)

  const user = await User
    .findById(result.id)
    .select({ email: 1, name: 1, avatarUrl: 1, token: 1 })

  if (!user || token !== user.token) {
    next(createError(401, ERROR_MESSAGES.notAuthorized))
  }

  req.user = user
  next()
}

module.exports = auth
