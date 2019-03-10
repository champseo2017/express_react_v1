var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([
      {id: 1, username: "champ"},
      {id: 2, password: "123456789"}
  ]);
});

module.exports = router;
