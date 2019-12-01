const assert = require('assert');

const inverseCaptcha01 = require('./elf-script');

describe('Day 1 - Part a: Inverse Captcha', () => {
	it('Calculate Inverse Captcha of 1122 correctly', () => {
		assert.equal(3, inverseCaptcha01('1122'));
	});
	
	it('Calculate Inverse Captcha of 1111 correctly', () => {
		assert.equal(4, inverseCaptcha01('1111'));
	});
	
	it('Calculate Inverse Captcha of 1234 correctly', () => {    
		assert.equal(0, inverseCaptcha01('1234'));
	});
	
	it('Calculate Inverse Captcha of 91212129 correctly', () => {    
		assert.equal(9, inverseCaptcha01('91212129'));
	});
});

