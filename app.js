process.argv.forEach(function(val, index, array) {
	if(index > 1) {
		console.log('argument ' + (index - 1) + ' : ' + val);
	}
});