const signupUser = require('./signupUserController')
const loginUser = require('./loginUserController')
const currentUser = require('./currentUserController')
const logoutUser = require('./logoutUserController')
const updateUserAvatar = require('./updateUserAvatarController')
const updateUserName = require('./updateUserNameController')
const googleAuth = require('./googleAuthController')

module.exports = {
  signupUser,
  loginUser,
  currentUser,
  logoutUser,
  updateUserAvatar,
  updateUserName,
  googleAuth
}
