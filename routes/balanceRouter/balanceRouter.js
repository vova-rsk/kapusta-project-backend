const express = require('express')
const router = express.Router()
const controllers = require('../../controllers')
const middlewars = require('../../middlewares')
const { wrapper, validationSchemas } = require('../../utils')

router.use(wrapper(middlewars.auth))

router.get('/', wrapper(controllers.currentBalance))
router.post('/', wrapper(controllers.setEntryFee))
router.patch('/', wrapper(controllers.updateBalanceData))

module.exports = router
