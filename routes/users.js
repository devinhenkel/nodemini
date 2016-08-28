var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.get('/', function(req, res, next){
  res.send("you made it");
});

router.post('/', function(req, res, next) {

  console.log(req.body);

  var user = new User({
     firstName: req.body.firstName,
     lastName: req.body.lastName,
     password: passwordHash.generate(req.body.password),
     email: req.body.email
  });

  user.save(function(err, result) {
      if (err) {
          return res.status(404).json({
              title: 'An error occurred',
              error: err
          });
      }
      res.status(200).json({
          message: 'Success',
          obj: result
      });
  });
});

router.post('/login', function(req, res, next){
  User.findOne({ email: req.body.email }, function(err, doc){
    if(err){
      return res.status(404).json({
        title: 'Sumpins up',
        error: err
      });
    }
    if(!doc){
      return res.status(404).json({
        title: 'No user found',
        error: {message: 'User could not be found'}
      });
    }
    if (!passwordHash.verify(req.body.password, doc.password)){
      return res.status(404).json({
        title: 'Liar!',
        error: {message: "That's not your password!"}
      });
    }
    var token = jwt.sign({user: doc}, 'secretkeyvalue', {expiresIn: 7200});
    res.status(200).json({
      message: "success",
      token: token,
      userId: doc._id
    });
  });
});

module.exports = router;
