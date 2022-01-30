require('colors')
const mongoose = require('mongoose')
const { constants: { ERROR_MESSAGES, SUCCESS_MESSAGES } } = require('../utils')

const app = require('../app')

const { DB_HOST, PORT = 3000 } = process.env

mongoose
  .connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(SUCCESS_MESSAGES.dbConnectionSuccess.green)

    app.listen(PORT, () => {
      console.log(`${SUCCESS_MESSAGES.serverStartedSuccess}: ${PORT.cyan}`.green)
    })
  })
  .catch(err => {
    console.log(ERROR_MESSAGES.dbConnectionError.red)
    console.log(err.message)
    process.exit(1)
  })
