const mongoose = require('mongoose')

//
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxlength: 32,
    trim: true,
  },
  lastname: {
    type: String,
    maxlength: 32,
    trim: true,
  },
  email: {
    type: String,
    maxlength: 32,
    require: true,
    unique: true,
    trim: true,
  },
  userInfo: {
    type: String,
    trim: true,
  },
  // TODO: come back here
  password: {
    type: String,
    trim: true,
  },
  salt: String,
  role: {
    type: Number,
    default: 0,
  },
  purchases: {
    type: Array,
    default: [],
  },
})

module.exports = mongoose.model('User', userSchema)
