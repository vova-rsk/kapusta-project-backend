const currentUser = async (req, res) => {
  const { email, name, avatarUrl } = req.user

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: {
        user: { email, name, avatarUrl }
      }
    }
  })
}

module.exports = currentUser
