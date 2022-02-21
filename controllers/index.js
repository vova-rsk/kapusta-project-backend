const userControllers = require('./user')
const balanceControllers = require('./balance')
const categoriesControllers = require('./categories')

module.exports = {
  ...userControllers,
  ...balanceControllers,
  ...categoriesControllers
}
