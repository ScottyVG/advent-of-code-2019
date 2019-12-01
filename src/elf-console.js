const fs = require("fs");

////////////////////////////////////////
// day 1 - A
////////////////////////////////////////
const input01 = fs.readFileSync('/home/ec2-user/repos/advent-of-code-2019/input/input01.txt', 'utf8', function (err, data) {
	if (err) throw err;
	console.log('OK: ' + './input/input01.txt'); 
	console.log(data);
});

const elfFunctionA = require('./day01/elfScriptA');

console.log('ADVENT OF CODE DAY 1');
console.log(`Day 1 - Part a: ${elfFunctionA(input01)}`);
console.log('\n');
