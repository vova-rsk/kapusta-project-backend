const { User } = require('../../models')

const signupUser = async (req, res) => {
  const result = await User.create({ ...req.body })

  const { email, name, avatarUrl } = result

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: { email, name, avatarUrl }
    }
  })
}

module.exports = signupUser
