const express = require('express')
const { getCategories, addCategory } = require('../../controllers')
const { validation } = require('../../middlewares')
const { wrapper, validationSchemas, constants } = require('../../utils')

const router = express.Router()
const { REQ_VALIDATION_TARGET } = constants
const categoryDataValidation = validation(validationSchemas.categoryDataSchema, REQ_VALIDATION_TARGET.BODY)

router.get('/', wrapper(getCategories))
router.post('/', wrapper(categoryDataValidation), wrapper(addCategory))

module.exports = router
