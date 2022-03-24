const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')
const createError = require('http-errors')
const { User } = require('../../models')
const { constants } = require('../../utils')

const ERROR_MESSAGES = constants
const SECRET_KEY = process.env.SECRET

const auth = async (req, res, next) => {
  const { authorization, authorizationtype } = req.headers

  if (!authorization || !authorizationtype) {
    throw createError(401, ERROR_MESSAGES.notAuthorized)
  }

  const token = authorization.split(' ')[1]
  let requestParams = null

  if (authorizationtype === ERROR_MESSAGES.AUTHORIZATION_TYPE.BY_EMAIL) {
    const result = jwt.verify(token, SECRET_KEY)

    requestParams = { _id: result.id }
  } else {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    })
    const { email } = ticket.getPayload()

    requestParams = { email }
  }

  const user = await User
    .findOne(requestParams)
    .select({ email: 1, name: 1, avatarUrl: 1, token: 1 })

  if (!user || token !== user.token) {
    next(createError(401, ERROR_MESSAGES.notAuthorized))
  }

  req.user = user
  next()
}

module.exports = auth
