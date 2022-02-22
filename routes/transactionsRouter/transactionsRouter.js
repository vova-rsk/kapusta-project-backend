const express = require('express')
const { getTransactions, addTransaction, deleteTransaction } = require('../../controllers')
const { auth, validation } = require('../../middlewares')
const { wrapper, validationSchemas, constants } = require('../../utils')

const router = express.Router()
const { REQ_VALIDATION_TARGET } = constants
const {
  getTransactionsQuerySchema,
  addTransactionDataSchema,
  deleteTransactionParamsSchema
} = validationSchemas
const getTransactionsValidation = validation(getTransactionsQuerySchema, REQ_VALIDATION_TARGET.QUERY)
const deleteTransactionValidation = validation(deleteTransactionParamsSchema, REQ_VALIDATION_TARGET.PARAMS)
const addTransactionValidation = validation(addTransactionDataSchema, REQ_VALIDATION_TARGET.BODY)

router.use(wrapper(auth))

router.get('/', wrapper(getTransactionsValidation), wrapper(getTransactions))
router.post('/', wrapper(addTransactionValidation), wrapper(addTransaction))
router.delete('/:transactionId', wrapper(deleteTransactionValidation), wrapper(deleteTransaction))

module.exports = router
