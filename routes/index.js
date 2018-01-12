var express = require('express');
var connection = require('express-myconnection');
var router = express.Router();
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API Home Page' });
});

router.get('/tt', function(req, res, next) { 
	 
 
	req.getConnection(function(err, con) {
		if(err) {
			return res.send(err);
		} else { 
			
			con.query('select * from service.test', function(e,r,f) {
				if(e) throw e;
				return res.send(r);
			});
		}
	}); 
	 
});




