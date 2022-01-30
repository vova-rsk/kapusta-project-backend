const express = require('express')
const router = express.Router()
const ctrls = require('../../controllers')
const { wrapper } = require('../../utils')

router.post('/signup', wrapper(ctrls.signupUser))
router.post('/login', wrapper(ctrls.loginUser))

// router.use(auth)

// router.post('/logout', wrapper(ctrl.logoutUser))
// router.get('/current', wrapper(ctrl.currentUser))
// router.patch('/', wrapper(subscriptionValidation), wrapper(ctrl.updateUserSubscription))
// router.patch('/avatars', upload.single('avatar'), wrapper(avatarValidation), wrapper(ctrl.updateUserAvatar))

module.exports = router
