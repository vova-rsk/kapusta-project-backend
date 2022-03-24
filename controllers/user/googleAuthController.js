const { OAuth2Client } = require('google-auth-library')
const createError = require('http-errors')
const { User } = require('../../models')
const { constants } = require('../../utils')

const { ERROR_MESSAGES } = constants

const googleAuth = async (req, res) => {
  const { token: idToken } = req.body

  if (!idToken) throw createError(401, ERROR_MESSAGES.missingTokenField)

  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID
  })

  const { name, email, picture } = ticket.getPayload()

  console.log(idToken)
  const user = await User
    .findOneAndUpdate({ email }, { email, name, avatarUrl: picture, token: idToken }, { upsert: true, new: true })
    .select({ email: 1, name: 1, avatarUrl: 1, token: 1 })

  console.log(user.token)

  res.status(200).json({
    status: 'success',
    code: 200,
    result: {
      token: user.token,
      user: {
        email: user.email,
        name: user.name,
        avatarUrl: user.avatarUrl
      }
    }
  })
}

module.exports = googleAuth
