const createError = require('http-errors')
const { Balance } = require('../../models')
const { constants: { ERROR_MESSAGES } } = require('../../utils')

const setEntryFee = async (req, res) => {
  const { _id: owner } = req.user
  const { value } = req.body

  const existingBalanceData = await Balance
    .findOne({ owner })
    .select({ entryFee: 1, owner: 1 })

  if (existingBalanceData) throw createError(400, ERROR_MESSAGES.entryFeeMultipleSettingError)

  const result = await Balance.create({ entryFee: value, owner })

  const { entryFee, totalIncome, totalCost } = result
  const balance = entryFee + totalIncome - totalCost

  res.status(201).json({
    status: 'success',
    code: 201,
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

module.exports = setEntryFee
