const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { signout, signup } = require('../controllers/auth')

router.post(
  '/signup',
  [
    // username must be at least 3 chars long
    check('name', 'Name Should be  at least 3 character').isLength({
      min: 3,
    }),
    check('email', 'Email is required').isEmail(),
    // password must be at least 3 chars long
    check('password', 'Password should be at least 3 character ').isLength({
      min: 3,
    }),
  ],
  signup
)
router.get('/signout', signout)

module.exports = router
