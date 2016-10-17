const User = require('./user').User;

var user = new User();

user.setName('toto');
console.log(user.getName());