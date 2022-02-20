const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()
const { userRouter } = require('./routes')
const { constants: { ERROR_MESSAGES } } = require('./utils')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/user', userRouter)

app.use((req, res) => {
  res.status(404).json({ message: ERROR_MESSAGES.notFound })
})

app.use((err, req, res, next) => {
  let { status = 500, message = ERROR_MESSAGES.serverError } = err

  if (err.code === 11000) {
    message = 'Email in use'
    status = 409
  }

  res.status(status).json({
    status: 'error',
    code: status,
    message
  })
})

module.exports = app
