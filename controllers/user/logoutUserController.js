const createError = require('http-errors')
const { User } = require('../../models')
const { constants: { ERROR_MESSAGES } } = require('../../utils')

const logoutUser = async (req, res) => {
  const { _id } = req.user

  const result = await User
    .findByIdAndUpdate(_id, { token: null })
    .select({ email: 1, name: 1, avatarUrl: 1 })

  if (!result) {
    throw createError(401, ERROR_MESSAGES.notAuthorized)
  }

  res.status(204).json()
}

module.exports = logoutUser
