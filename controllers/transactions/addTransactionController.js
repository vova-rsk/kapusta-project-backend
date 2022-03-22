const { Transaction } = require('../../models')

const addTransaction = async (req, res) => {
  const { _id: owner } = req.user

  const newTransactionData = {
    type: req.body.type,
    completedAt: req.body.date,
    description: req.body.description,
    category: req.body.category,
    amount: req.body.amount
  }

  const result = await Transaction.create({ ...newTransactionData, owner })

  const { _id, type, completedAt, description, category, amount } = result

  res.status(201).json({
    status: 'success',
    code: 201,
    result: {
      _id,
      type,
      completedAt,
      description,
      category,
      amount
    }
  })
}

module.exports = addTransaction
