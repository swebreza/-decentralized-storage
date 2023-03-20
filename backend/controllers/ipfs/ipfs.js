const saveFile = require('./saveFile')

exports.ipfsFile = async (req, res) => {
  const data = saveFile.saveFile()
  await data.then((result) => {
    return res.json({
      message: result,
    })
  })
}
