const User = require('../modules/user')

exports.getUserById = (req, res, next, id) => {
  // const { _id } = req.body //Debugging
  // console.log(id)//Debugging
  User.findById(id)
    .then((result) => {
      req.profile = result
      next()
    })
    .catch((err) => {
      if (err) {
        return res.status(400).json({
          error: 'No User was Found in DB',
          // err: err,//Debugging
        })
      }
    })
}
// we are hiding user credential to send back with the response
exports.getUser = (req, res) => {
  // TODO: get back here for password
  req.profile.salt = undefined //done
  req.profile.encry_password = undefined //done
  req.profile.createdAt = undefined //done
  req.profile.updatedAt = undefined //Not done
  return res.json(req.profile)
}

// .exec((err, user) => {
//   if (err || !user) {
//     return res.status(400).json({
//       error: 'No User was Found in DB',
//     })
//   }
//   req.profile = user
//   next()
// })
