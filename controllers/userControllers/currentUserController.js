const currentUser = async (req, res) => {
  res.json({
    status: 'success',
    code: 200,
    data: {
      // result: user
    }
  })
}

module.exports = currentUser
