var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var db = req.db,
    collection = db.collection('books');

  collection.find().toArray(function(err, result){
    console.log(result);
    // res.json(result);
    res.render('books', {
      'booklist': result
    });
  });
});

module.exports = router;