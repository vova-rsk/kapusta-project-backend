const express = require('express')
const router = express.Router()
const controllers = require('../../controllers')
const middlewars = require('../../middlewares')
const { wrapper } = require('../../utils')

router.post('/signup', wrapper(controllers.signupUser))
router.post('/login', wrapper(controllers.loginUser))

router.use(wrapper(middlewars.auth))

router.post('/logout', wrapper(controllers.logoutUser))
router.get('/current', wrapper(controllers.currentUser))

module.exports = router
