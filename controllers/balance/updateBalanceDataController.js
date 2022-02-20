const createError = require('http-errors')
const { Balance } = require('../../models')
const { constants: { ERROR_MESSAGES, BALANCE_DATA_TYPES } } = require('../../utils')

const updateBalanceData = async (req, res) => {
  const { _id: owner } = req.user
  const { type, value } = req.body

  const doc = await Balance.findOne({ owner })

  if (!doc) throw createError(404, ERROR_MESSAGES.notFound)

  type.toLowerCase() === BALANCE_DATA_TYPES.income
    ? doc.totalIncome += value
    : doc.totalCost += value

  const result = await doc.save({ entryFee: 1, totalIncome: 1, totalCost: 1 })

  const { entryFee, totalIncome, totalCost } = result
  const balance = entryFee + totalIncome - totalCost

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result: {
        entryFee,
        totalIncome,
        totalCost,
        balance
      }
    }
  })
}

module.exports = updateBalanceData
