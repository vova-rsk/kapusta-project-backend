const { Schema, model } = require('mongoose')
const { constants: { TRANSACTION_TYPES }, getBalance } = require('../../utils')

// transaction schema
const transactionSchema = Schema({
  type: {
    type: String,
    required: [true, 'Unknown transaction type'],
    trim: true
  },
  completedAt: {
    type: Date,
    required: [true, 'Unset transaction date']
  },
  description: {
    type: String,
    required: [true, 'Unset transaction description']
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: [true, 'Category is required']
  },
  amount: {
    type: Number,
    required: [true, 'Unset transaction amount']
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Owner is required']
  }
}, { versionKey: false, timestamps: true })

// pre-hook for changing balance before adding transaction
transactionSchema.pre('save', { document: true }, async function (next) {
  const { owner, type, amount } = this

  const doc = await model('balance').findOne({ owner })

  if (!doc) throw new Error('balance entry fee not set')

  const currentBalance = getBalance(doc)

  if (type.toLowerCase() === TRANSACTION_TYPES.CREDIT && currentBalance < amount) {
    throw new Error('insufficient balance')
  }

  type.toLowerCase() === TRANSACTION_TYPES.CREDIT
    ? doc.totalCost += amount
    : doc.totalIncome += amount

  doc.save()
  next()
})

// pre-hook for changing balance before removing transaction
transactionSchema.pre('findOneAndRemove', { document: false, query: true }, async function (next) {
  const transactionId = this.getQuery()._id

  const transaction = await model('transaction').findOne({ _id: transactionId })

  if (!transaction) next()

  const { owner, type, amount } = transaction

  const doc = await model('balance').findOne({ owner })

  if (!doc) throw new Error('balance entry fee not set')

  const currentBalance = getBalance(doc)

  if (type.toLowerCase() === TRANSACTION_TYPES.DEBIT && currentBalance < amount) {
    throw new Error('Execution error. Negative balance expected')
  }

  type.toLowerCase() === TRANSACTION_TYPES.DEBIT
    ? doc.totalIncome -= amount
    : doc.totalCost -= amount

  doc.save()
  next()
})

const Transaction = model('transaction', transactionSchema)

module.exports = Transaction
