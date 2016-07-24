var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function(req, res, next){
  Message.find()
    .exec(function(err, docs){
      if(err){
        return res.status(404).json({
          title: 'Sumpins up',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: docs
      });
    });
});

router.post('/', function(req, res, next){
  var message = new Message({
    content: req.body.content
  });
  message.save(function(err, result){
    if(err){
      return res.status(404).json({
        title: 'Sumpins up',
        error: err
      });
    }
    res.status(201).json({
      message: 'saved message',
      obj: result
    });
  });
});


module.exports = router;
