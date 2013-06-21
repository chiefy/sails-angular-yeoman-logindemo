/*---------------------
	:: Session 
	-> controller
---------------------*/
var bcrypt = require('bcrypt');

var SessionController = {

	login: function(req,res) {

		// User already logged in
		if(req.session && req.session.authenticated === true) {
			return res.json({ authorized: true, user: req.session.user });
		}

		// @todo validate / sanitize e-mail & password length
		// @todo csrf protection
		var user = User.find({
			email: req.param('email')
		}).done(function(err,user){
			var err_msg = "Invalid username or password";
			
			if(err) {
				return res.json({ error: err.message },500);
			} 
			
			if(!user || !bcrypt.compareSync(req.param('password'),user.password)) {
				return res.json({ authorized: false });
			} 
			
			delete user.password;
			
			req.session.authenticated = true;
			req.session.user = user;

			return res.json({ authorized: true, user: user });
		});
	},
	
	logout: function(req,res) {
		delete req.session;
		res.end();
	}

};
module.exports = SessionController;