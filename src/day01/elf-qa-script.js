const assert = require('assert');

const elfFunctionA = require('./elfScriptA');

describe('Day 1 - Part a: The Tyranny of the Rocket Equation', () => {
	it('Calculate Rocket Equation of 12 correctly', () => {
		const expectedOutput = 2;
		assert.equal(expectedOutput, elfFunctionA('12'));
	});

	it('Calculate Rocket Equation of 14 correctly', () => {
		const expectedOutput = 2;
		assert.equal(expectedOutput, elfFunctionA('14'));
	});

	it('Calculate Rocket Equation of 1969 correctly', () => {
		const expectedOutput = 654;
		assert.equal(expectedOutput, elfFunctionA('1969'));
	});

	it('Calculate Rocket Equation of 100756 correctly', () => {
		const expectedOutput = 33583;
		assert.equal(expectedOutput, elfFunctionA('100756'));
	});
});
