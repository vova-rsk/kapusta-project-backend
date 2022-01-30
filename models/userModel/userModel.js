const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  name: {
    type: String
  },
  avatarUrl: {
    type: String
  },
  token: {
    type: String,
    default: null
  }
}, { versionKey: false, timestamps: true })

userSchema.pre('save', function () {
  if (this.isNew) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
    this.name = this.email.split('@')[0]
    this.avatarUrl = gravatar.url(this.email, { protocol: 'http', s: '250', d: 'robohash' })
  }
})

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

const User = model('user', userSchema)

module.exports = User
