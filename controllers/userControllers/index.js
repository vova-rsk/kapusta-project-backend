const signupUser = require('./signupUserController')
const loginUser = require('./loginUserController')
const currentUser = require('./currentUserController')
const logout = require('./logoutUserController')
const updateUserAvatar = require('./updateUserAvatarController')
const updateUserName = require('./updateUserNameController')

module.exports = {
  signupUser,
  loginUser,
  currentUser,
  logout,
  updateUserAvatar,
  updateUserName
}
