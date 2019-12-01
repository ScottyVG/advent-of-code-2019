const fs = require("fs");
// const contents = fs.readFileSync('./input/data.json');
// const santasBigDataSet = JSON.parse(contents);

// const input02 = fs.readFileSync('./input/input02.txt', 'utf8', function (err, data) {
// 	if (err) throw err;
// 	console.log('OK: ' + './input/input02.txt');
// 	console.log(data);
// });

// const input03 = fs.readFileSync('./input/input03.txt', 'utf8', function (err, data) {
// 	if (err) throw err;
// 	console.log('OK: ' + './input/input03.txt');
// 	console.log(data);
// });

// const input04 = fs.readFileSync('./input/input04.txt', 'utf8', function (err, data) {
// 	if (err) throw err;
// 	console.log('OK: ' + './input/input04.txt');
// 	console.log(data);
// });

// const input05 = fs.readFileSync('./input/input05.txt', 'utf8', function (err, data) {
// 	if (err) throw err;
// 	console.log('OK: ' + './input/input05.txt');
// 	console.log(data);
// });

// const input06 = fs.readFileSync('./input/input06.txt', 'utf8', function (err, data) {
// 	if (err) throw err;
// 	console.log('OK: ' + './input/input06.txt');
// 	console.log(data);
// });

// const input07 = fs.readFileSync('./input/input07.txt', 'utf8', function (err, data) {
// 	if (err) throw err;
// 	console.log('OK: ' + './input/input07.txt');
// 	console.log(data);
// });

// const input08 = fs.readFileSync('./input/input08.txt', 'utf8', function (err, data) {
// 	if (err) throw err;
// 	console.log('OK: ' + './input/input08.txt');
// 	console.log(data);
// });

// const input09 = fs.readFileSync('./input/input09.txt', 'utf8', function (err, data) {
// 	if (err) throw err;
// 	console.log('OK: ' + './input/input09.txt'); 
// 	console.log(data);
// });

// const input10 = fs.readFileSync('./input/input10.txt', 'utf8', function (err, data) {
// 	if (err) throw err;
// 	console.log('OK: ' + './input/input10.txt'); 
// 	console.log(data);
// });

// const input11 = fs.readFileSync('./input/input11.txt', 'utf8', function (err, data) {
// 	if (err) throw err;
// 	console.log('OK: ' + './input/input11.txt'); 
// 	console.log(data);
// });

// const input12 = fs.readFileSync('./input/input12.txt', 'utf8', function (err, data) {
// 	if (err) throw err;
// 	console.log('OK: ' + './input/input12.txt'); 
// 	console.log(data);
// });

// const input13 = fs.readFileSync('./input/input13.txt', 'utf8', function (err, data) {
	// if (err) throw err;
	// console.log('OK: ' + './input/input13.txt'); 
	// console.log(data);
// });

// const inverseCaptcha01 = require('./day01/day01-a');
// const inverseCaptcha02 = require('./day01/day01-b');

// const corruptionChecksum01 = require('./day02/day02-a');
// const corruptionChecksum02 = require('./day02/day02-b');

// const spiralMemory01 = require('./day03/day03-a');
// const spiralMemory02 = require('./day03/day03-b');

// const highEntropyPassphrases01 = require('./day04/day04-a');
// const highEntropyPassphrases02 = require('./day04/day04-b');

// const twistyTrampolines01 = require('./day05/day05-a');
// const twistyTrampolines02 = require('./day05/day05-b');

// const memoryReallocation01 = require('./day06/day06-a');
// const memoryReallocation02 = require('./day06/day06-b');

// const recursiveCircus01 = require('./day07/day07-a');
// const recursiveCircus02 = require('./day07/day07-b');

// const registers01 = require('./day08/day08-a');
// const registers02 = require('./day08/day08-b');

// const streamProcessing01 = require('./day09/day09-a');
// const streamProcessing02 = require('./day09/day09-b');

// const knotHash01 = require('./day10/day10-a');
// const knotHash02 = require('./day10/day10-b');

// const hexEd01 = require('./day11/day11-a');
// const hexEd02 = require('./day11/day11-b');

// const digitalPlumber01 = require('./day12/day12-a');
// const digitalPlumber02 = require('./day12/day12-b');

// const packetScanner01 = require('./day13/day13-a');
// const packetScanner02 = require('./day13/day13-b');

// console.log('ADVENT OF CODE DAY 01');
// console.log(`Day 01 - Part a: ${inverseCaptcha01(santasBigDataSet.input01)}`);
// console.log(`Day 01 - Part b: ${inverseCaptcha02(santasBigDataSet.input01)}`);
// console.log('\n');

// console.log('ADVENT OF CODE DAY 02');
// console.log(`Day 02 - Part a: ${corruptionChecksum01(input02)}`);
// console.log(`Day 02 - Part b: ${corruptionChecksum02(input02)}`);
// console.log('\n');

// console.log('ADVENT OF CODE DAY 03');
// console.log(`Day 03 - Part a: ${spiralMemory01(361527)}`);
// console.log(`Day 03 - Part b: ${spiralMemory02(input03)}`);
// console.log('\n');

// console.log('ADVENT OF CODE DAY 04');
// console.log(`Day 04 - Part a: ${highEntropyPassphrases01(input04)}`);
// console.log(`Day 04 - Part b: ${highEntropyPassphrases02(input04)}`);
// console.log('\n');

// console.log('ADVENT OF CODE DAY 05');
// console.log(`Day 05 - Part a: ${twistyTrampolines01(input05)}`);
// console.log(`Day 05 - Part b: ${twistyTrampolines02(input05)}`);
// console.log('\n');

// console.log('ADVENT OF CODE DAY 06');
// console.log(`Day 06 - Part a: ${memoryReallocation01(input06)}`);
// console.log(`Day 06 - Part b: ${memoryReallocation02(input06)}`);
// console.log('\n');

// console.log('ADVENT OF CODE DAY 07');
// console.log(`Day 07 - Part a: ${recursiveCircus01(input07)}`);
// console.log(`Day 07 - Part b: ${recursiveCircus02(input07)}`);
// console.log('\n');

// console.log('ADVENT OF CODE DAY 08');
// console.log(`Day 08 - Part a: ${registers01(input08)}`);
// console.log(`Day 08 - Part b: ${registers02(input08)}`);
// console.log('\n');

// console.log('ADVENT OF CODE DAY 09');
// console.log(`Day 09 - Part a: ${streamProcessing01(input09)}`);
// console.log(`Day 09 - Part b: ${streamProcessing02(input09)}`);
// console.log('\n');

// console.log('ADVENT OF CODE DAY 10');
// console.log(`Day 10 - Part a: ${knotHash01(input10)}`);
// console.log(`Day 10 - Part b: ${knotHash02(input10)}`);
// console.log('\n');

// console.log('ADVENT OF CODE DAY 12');
// console.log(`Day 12 - Part a: ${digitalPlumber01(input12)}`);
// console.log(`Day 12 - Part b: ${digitalPlumber02(input12)}`);
// console.log('\n');

// console.log('ADVENT OF CODE DAY 13');
// console.log(`Day 13 - Part a: ${packetScanner01(input13)}`);
// console.log(`Day 13 - Part b: ${packetScanner02(input13)}`);
// console.log('\n');
