var mod = require('./mod');
mod('Hello world', (msg) => {
	console.log('msg is : ' + msg);
})