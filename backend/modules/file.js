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
  },
  { timestamps: true }
)

module.exports = mongoose.model('File', fileSchema)
