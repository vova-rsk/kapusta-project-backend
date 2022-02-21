const express = require('express')
const controllers = require('../../controllers')
const middlewars = require('../../middlewares')
const { wrapper, validationSchemas } = require('../../utils')

const router = express.Router()

router.get('/', wrapper(controllers.getCategories))
router.post('/', wrapper(middlewars.validation(validationSchemas.categoryDataSchema)), wrapper(controllers.addCategory))

module.exports = router
