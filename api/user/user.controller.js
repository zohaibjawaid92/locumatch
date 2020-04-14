'use strict';

var User = require('./user.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var validationError = function(res, err) {
  return res.status(422).json(err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  User.find({}, '-salt -hashedPassword', function (err, users) {
    if(err) return res.status(500).send(err);
    res.status(200).json(users);
  });
};

// exports.login = function(req,res) {
//   var email = String(req.body.email);
//   var password = String(req.body.password);
//   User.getUserByUsername(email, (err,user) => {
//     if(err) throw err;
//     if(!user){
//         return res.json({success:false , msg:'Email Not found!!'});
//     }
//     User.comparePassword(password,user.password , (err, isMatch) =>{
//       if(err) throw err;
//       if(isMatch){
//           const token = jwt.sign(user.toJSON(),config.secret, {
//                 expiresIn: 604800 //1 week
//           });
   
//       res.json({
//            success: true,
//            token: 'Bearer ' + token,
//            user: {
//                id: user._id,
//                email : user.email,
//            }
//       });
//      } else {
//         return res.json({success : false, msg:'Invalid Password!!'}); 
//      }
//     });
//  });
// }

/**
 * Creates a new user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  newUser.provider = 'local';
  // newUser.role = 'user';
  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*5 });
    res.json({ token: token });
  });
};

/**
 * Get a single user
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.status(401).send('Unauthorized');
    res.json(user.profile);
  });
};

/**
* update  User(name , email,password)
* restriction: user is authenticated you can chage it and make restricted to specified role
**/

exports.update = function(req, res) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);
  var newN = String(req.body.newName);
  var newM = String(req.body.neweMail);
  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.name = newN;
      user.email = newM;
      user.save(function(err) {
        if (err) return validationError(res, err);
        res.status(200).send('OK');
      });
   } else {
     res.status(403).send('Forbidden');
   }
  });
};
/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if(err) return res.status(500).send(err);
    return res.status(204).send('No Content');
  });
};

/**
 * Change a users password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return validationError(res, err);
        res.status(200).send('OK');
      });
    } else {
      res.status(403).send('Forbidden');
    }
  });
};

/**
 * Get my info
 */
exports.me = function(req, res, next) {
  var userId = req.user._id;
  User.findOne({
    _id: userId
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
    if (err) return next(err);
    if (!user) return res.status(401).send('Unauthorized');
    res.json(user);
  });
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};
