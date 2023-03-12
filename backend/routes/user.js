const express = require('express')
const router = express.Router()

const { getUserById, getUser, getAllUser } = require('../controllers/user')
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth')

router.param('userId', getUserById)

router.get('/user/:userId', isSignedIn, isAuthenticated, getUser)

// Getting all users
router.get('/users', getAllUser)

module.exports = router
