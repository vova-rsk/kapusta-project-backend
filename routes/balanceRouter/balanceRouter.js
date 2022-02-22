const express = require('express')
const { setEntryFee, getCurrentBalance } = require('../../controllers')
const { auth, validation } = require('../../middlewares')
const { wrapper, validationSchemas, constants } = require('../../utils')

const router = express.Router()
const { REQ_VALIDATION_TARGET } = constants
const entryFeeValidation = validation(validationSchemas.entryFeeDataSchema, REQ_VALIDATION_TARGET.BODY)

router.use(wrapper(auth))

router.get('/', wrapper(getCurrentBalance))
router.post('/', wrapper(entryFeeValidation), wrapper(setEntryFee))

module.exports = router
