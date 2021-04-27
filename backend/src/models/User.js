const crypto = require('crypto')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Debe agregar el nombre'],
  },
  lastName: {
    type: String,
    required: [true, 'Debe agregar sus apellidos'],
  },
  email: {
    type: String,
    required: [true, 'Debe agregar un correo electrónico'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Debe agregar un correo válido',
    ],
  },
  role: {
    type: String,
    enum: ['asesor', 'asesorado'],
    default: 'asesorado',
  },
  password: {
    type: String,
    required: [true, 'Debe agregar una contraseña'],
    minlength: 6,
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})
// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
  //only if the password is been modified
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})
// Sign JWT and return
//methods can be called where  the model is declared
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  })
}
// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}
//? Generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString('hex')

  // Hash token and set to resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex')

  // Set expire 10m
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000

  return resetToken
}
module.exports = mongoose.model('User', UserSchema)
