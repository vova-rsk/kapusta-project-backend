const jwt = require('jsonwebtoken')
const { User } = require('../../models')
const { constants: { ERROR_MESSAGES } } = require('../../utils')

const SECRET_KEY = process.env.SECRET

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers

    if (!authorization) {
      throw new Error()
    }

    const token = authorization.split(' ')[1]
    const result = jwt.verify(token, SECRET_KEY)

    const user = await User
      .findById(result.id)
      .select({ email: 1, name: 1, avatarUrl: 1, token: 1 })

    if (!user || token !== user.token) {
      throw new Error()
    }

    req.user = user
    next()
  } catch (err) {
    err.status = 401
    err.message = ERROR_MESSAGES.notAuthorized
    next(err)
  }
}

module.exports = auth
