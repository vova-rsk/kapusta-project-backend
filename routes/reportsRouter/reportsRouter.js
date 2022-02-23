const express = require('express')
const { getDetailedInfo } = require('../../controllers')
const { auth, validation } = require('../../middlewares')
const { wrapper, validationSchemas, constants } = require('../../utils')

const router = express.Router()
const { REQ_VALIDATION_TARGET } = constants

router.use(wrapper(auth))

router.get('/detailed', wrapper(getDetailedInfo))
router.get('/summary', wrapper(() => { console.log('456') }))

module.exports = router
