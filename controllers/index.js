const userControllers = require('./user')
const balanceControllers = require('./balance')
const categoriesControllers = require('./categories')
const transactionsControllers = require('./transactions')

module.exports = {
  ...userControllers,
  ...balanceControllers,
  ...categoriesControllers,
  ...transactionsControllers
}
