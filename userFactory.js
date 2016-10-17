var User = require('./user').User;

module.exports = function user(name) {
	var user = new User();
	user.setName(name);
	return user;
}