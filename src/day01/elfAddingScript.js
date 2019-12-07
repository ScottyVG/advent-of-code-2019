const elfFunction = require('./day01/elfScriptA');

const input01 = fs.readFileSync('/home/ec2-user/repos/advent-of-code-2019/input/input01.txt', 'utf8', function (err, data) {
	if (err) throw err;
	console.log('OK: ' + './input/input01.txt'); 
	console.log(data);
});

const elfAddingFunction = (input) => {
	let output = Math.floor(input / 3) - 2;
	return output;
};

module.exports = elfFunctionA;
