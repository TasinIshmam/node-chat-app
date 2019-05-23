var expect = require('expect');

var { isRealString} = require('./validation');

describe('isRealString', () => {

    it('should return true for valid string', () => {
        var string = 'Jen';

        expect(isRealString(string)).toBe(true);

    });

    it('should return false for empty string', () => {
        var string = '';

        expect(isRealString(string)).toBe(false);

    });
});
