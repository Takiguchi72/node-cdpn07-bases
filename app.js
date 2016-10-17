const userFactory = require('./userFactory');

var user = userFactory('toto');
console.log(user.getName());