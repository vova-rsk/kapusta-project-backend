const express = require('express')
const router = express.Router()
const controllers = require('../../controllers')
const middlewars = require('../../middlewares')
const { wrapper } = require('../../utils')

router.post('/signup', wrapper(controllers.signupUser))
router.post('/login', wrapper(controllers.loginUser))

router.use(middlewars.auth)

router.post('/logout', wrapper(controllers.logoutUser))
router.get('/current', wrapper(controllers.currentUser))
// router.patch('/', wrapper(subscriptionValidation), wrapper(ctrl.updateUserSubscription))
// router.patch('/avatars', upload.single('avatar'), wrapper(avatarValidation), wrapper(ctrl.updateUserAvatar))

module.exports = router
