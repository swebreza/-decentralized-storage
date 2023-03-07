const { validationResult } = require('express-validator')
const User = require('../modules/user')

exports.signup = (req, res) => {
  // user validation Check Result
  const errors = validationResult(req)
  // if error is present
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    })
  }

  const user = new User(req.body)
  // return res.json(user)
  user
    .save()
    .then((savedUser) => {
      res.json({
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
      })
    })
    .catch((err) => {
      res.status(400).json({
        error: 'Failed to save user to DB',
      })
    })
}

exports.signout = (req, res) => {
  res.json({
    message: 'User Signout',
  })
}

// (err, user) => {
// if (err) {
//   console.error(err)
// } else {
//   console.log('User saved successfully:', user)
// }
// if (err) {
//   return res.status(400).json({
//     err: 'NOT Able to save user in DB',
//   })
// } else {
//   return res.json(user)
// }}
