const express = require('express')
const { signupUser, loginUser, logoutUser, currentUser } = require('../../controllers')
const { auth, validation } = require('../../middlewares')
const { wrapper, validationSchemas, constants } = require('../../utils')

const router = express.Router()
const { REQ_VALIDATION_TARGET } = constants
const signupUserDataValidation = validation(validationSchemas.userDataSchema, REQ_VALIDATION_TARGET.BODY)

router.post('/signup', wrapper(signupUserDataValidation), wrapper(signupUser))
router.post('/login', wrapper(loginUser))

router.use(wrapper(auth))

router.post('/logout', wrapper(logoutUser))
router.get('/current', wrapper(currentUser))

module.exports = router
