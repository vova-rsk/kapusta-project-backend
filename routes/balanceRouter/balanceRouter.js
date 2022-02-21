const express = require('express')
const router = express.Router()
const controllers = require('../../controllers')
const middlewars = require('../../middlewares')
const { wrapper, validationSchemas } = require('../../utils')

router.use(wrapper(middlewars.auth))

router.get('/', wrapper(controllers.currentBalance))
router.post('/', wrapper(middlewars.validation(validationSchemas.entryFeeDataSchema)), wrapper(controllers.setEntryFee))

module.exports = router
