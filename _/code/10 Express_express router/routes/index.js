var express = require('express');
var router = express.Router();

router
  .route('/json')
  .get(function(req, res) {
    console.log('GET the json');
    res
      .status(200)
      .json({ "jsondata" : "GET received" });
  })
  .post(function(req, res) {
    console.log('POST the json');
    res
      .status(200)
      .json({ "jsondata" : "POST received" });
  });

module.exports = router;