const {sum} = require("./main.js")

describe('Sum', () => {
	it('should sum test', () => {
		expect(sum(2, 4)).toBe(76)
	});
});