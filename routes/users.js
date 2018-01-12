var express = require('express');
var router = express.Router();
module.exports = router;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/tt', function(req, res, next) {
	var tt = {};
	try {
		
		return next(tt);
	} catch (error) {
		return next(tt);
	}
});


