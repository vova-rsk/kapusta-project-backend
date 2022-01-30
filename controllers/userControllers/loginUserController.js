const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const { User } = require('../../models')
const { constants: { ERROR_MESSAGES } } = require('../../utils')

const SECRET_KEY = process.env.SECRET

const loginUser = async (req, res) => {
  const { email: enteredEmail, password: enteredPassword } = req.body

  const user = await User
    .findOne({ email: enteredEmail })
    .select({ email: 1, password: 1 })

  if (!user || !user.comparePassword(enteredPassword)) {
    throw createError(401, ERROR_MESSAGES.invalidLoginData)
  }

  const generatedToken = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '12h' })

  const updatedUser = await User
    .findByIdAndUpdate(user._id, { token: generatedToken }, { new: true })
    .select({ email: 1, name: 1, avatarUrl: 1, token: 1 })

  const { email, name, avatarUrl, token } = updatedUser

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result: {
        token,
        user: {
          email,
          name,
          avatarUrl
        }
      }
    }
  })
}

module.exports = loginUser
