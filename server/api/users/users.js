var express = require('express');
var router = express.Router();

// pull in user model

var User = require(__dirname+"/user.model");

// transform any :id URL parameter in a requestUser json object on the req object - easier to use downthe request chain

router.param('id', function(req,res,next,id){
	User.findById(id).exec()
	.then(function(user)
		if(!user) throw HttpError(404)
		else{
			req.requestedUser = user
		}
}).then(null,next)

/* GET user JSON object */
router.get('/', function(req, res, next) {
  res.json(req.requestedUser)
});

router.post('/', function(req,res,next){
		
})


module.exports = router;
