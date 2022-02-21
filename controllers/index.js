const userControllers = require('./user')
const balanceControllers = require('./balance')

module.exports = {
  ...userControllers,
  ...balanceControllers
}
