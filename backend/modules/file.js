const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32,
      unique: true,
    },
    path: {
      type: String,
    },
    cid: {
      code: {
        type: Number,
      },
      version: {
        type: Number,
      },
      hash: {
        type: String,
      },
    },
    size: {
      type: Number,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('File', fileSchema)
