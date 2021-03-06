const userDataSchema = require('./signUserDataSchema')
const entryFeeDataSchema = require('./addEntryFeeDataSchema')
const categoryDataSchema = require('./addCategoryDataSchema')
const getTransactionsQuerySchema = require('./getTransactionsDataSchema')
const deleteTransactionParamsSchema = require('./deleteTransactionDataSchema')
const addTransactionDataSchema = require('./addTransactionDataSchema')
const detailedReportQuerySchema = require('./getDetailedReportQuerySchema')
const summaryReportQuerySchema = require('./getSummaryReportQuerySchema')

module.exports = {
  userDataSchema,
  entryFeeDataSchema,
  categoryDataSchema,
  getTransactionsQuerySchema,
  deleteTransactionParamsSchema,
  addTransactionDataSchema,
  detailedReportQuerySchema,
  summaryReportQuerySchema
}
