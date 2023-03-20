const express = require('express')
const router = express.Router()

const { ipfsFile } = require('../controllers/ipfs/ipfs')

router.get('/ipfs', ipfsFile)

module.exports = router
