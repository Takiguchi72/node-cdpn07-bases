var total = 0;
process.argv.forEach(function(val, index, array) {
	if(index > 1) {
		total += parseInt(val);
	}
});
console.log(total);