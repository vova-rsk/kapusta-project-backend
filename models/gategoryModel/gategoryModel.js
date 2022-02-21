const { Schema, model } = require('mongoose')
const path = require('path')

const categorySchema = Schema({
  type: {
    type: String,
    required: [true, 'Unknown category type'],
    trim: true
  },
  name: {
    type: String,
    required: [true, 'Unset category name']
  },
  iconUrl: {
    type: String,
    default: ''
  }
}, { versionKey: false, timestamps: true })

categorySchema.pre('save', function () {
  if (this.isNew) {
    this.name = this.name[0].toUpperCase() + this.name.slice(1)
  }
})

categorySchema.post('save', doc => {
  doc.iconUrl = path.join('icons', `${doc.id}.svg`)
  doc.save()
})

const Category = model('category', categorySchema)

module.exports = Category
