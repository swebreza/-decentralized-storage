const saveFile = require('./saveFile')
const User = require('../../modules/user')

exports.ipfsFile = async (req, res, id) => {
  // const id = req.profile._id
  const data = saveFile.saveFile()
  await data.then((result) => {
    console.log(result)
    User.findOne({ _id: id })
      .populate('File')
      .then((results) => {
        res.json({
          message: results,
        })
      })
      .catch((err) => console.log(err))

    return result
  })
}
