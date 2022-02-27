const express = require('express')
const { getDetailedInfo, getSummaryInfo } = require('../../controllers')
const { auth, validation } = require('../../middlewares')
const { wrapper, validationSchemas, constants } = require('../../utils')

const router = express.Router()
const { REQ_VALIDATION_TARGET } = constants
const detailedReportQueryValidation = validation(validationSchemas.detailedReportQuerySchema, REQ_VALIDATION_TARGET.QUERY)
const summaryReportQueryValidation = validation(validationSchemas.summaryReportQuerySchema, REQ_VALIDATION_TARGET.QUERY)

router.use(wrapper(auth))

router.get('/detailed', wrapper(detailedReportQueryValidation), wrapper(getDetailedInfo))
router.get('/summary', wrapper(summaryReportQueryValidation), wrapper(getSummaryInfo))

module.exports = router
