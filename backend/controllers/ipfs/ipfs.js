const saveFile = require('./saveFile')
const User = require('../../modules/user')

exports.ipfsFile = async (req, res) => {
  // const id = req.profile._id
  const data = saveFile.saveFile()
  await data.then((result) => {
    return res.json({
      message: result,
    })
  })
}
