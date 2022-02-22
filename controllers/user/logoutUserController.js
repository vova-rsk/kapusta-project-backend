const createError = require('http-errors')
const { User } = require('../../models')
const { constants } = require('../../utils')

const { ERROR_MESSAGES } = constants

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
