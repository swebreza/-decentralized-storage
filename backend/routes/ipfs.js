const express = require('express')
const router = express.Router()

const { ipfsFile } = require('../controllers/ipfs/ipfs')
// const { ipfsMongo } = require('../controllers/ipfs/ipfsMongo')

router.get('/ipfs', ipfsFile)
// router.get('/ipfsmongo', ipfsMongo)

module.exports = router
