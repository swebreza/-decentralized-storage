// const User = require('../modules/user')
const File = require('../../modules/file')
const ipfs = require('../ipfs/ipfs')

exports.saveFile = (req, res) => {
  const result = ipfs.ipfsFile()
  File.save(() => {
    res.json({
      name: 'TestName',
      path: result.path,
      cid: result.cid,
      size: result.size,
    })
  }).then((result) => {
    console.log('SUCCESS', result)
  })
}
