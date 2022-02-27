const userControllers = require('./user')
const balanceControllers = require('./balance')
const categoriesControllers = require('./categories')
const transactionsControllers = require('./transactions')
const reportsControllers = require('./reports')

module.exports = {
  ...userControllers,
  ...balanceControllers,
  ...categoriesControllers,
  ...transactionsControllers,
  ...reportsControllers
}
